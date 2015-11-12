import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';
import _ from 'underscore';


var Restaurant = React.createClass({


 mixins: [BackboneMixin],

 getDefaultProps() {
   return {
     restaurant: store.getRestaurant(),
   }
 },

 componentWillMount() {
   this.props.restaurant.on('add change remove', this.forceUpdate.bind(this, null), this)
   this.props.restaurant.setRestaurant(this.props.params.id)
   this.props.restaurant.fetch()
 },

 componentWillUnmount() {
   this.props.restaurant.off('add change remove', null, this);
 },

 getModels() {
   return {
     restaurants: store.getRestaurants()
   };
 },

 handleSubmit(e) {
   e.preventDefault();
   let search = this.refs.search.value;
   store.searchRestaurants(search);
   console.log(search);
 },

 handleFavorite(e) {
   e.preventDefault();

 },

 handleUnfavorite(e) {
   e.preventDefault();
   store.unfavoriteRestaurant(restaurant)
 },

 isFavorited(restaurant) {
   return _.some(this.state.favorites, (f) => {
     return f.restaurant.objectId === restaurant.objectId;
   })
 },

 render() {
   var restaurant = this.props.restaurant.toJSON()[0] || {};
   if(restaurant.user_rating && restaurant.user_rating.aggregate_rating){
     this.hasRestaurant = true;
     console.log(restaurant.user_rating.aggregate_rating);
   }
   return (
     <div>
       <div>
         <form className="top-nav" onSubmit={this.handleSubmit}>
           <input type="search" className="search-box" placeholder="Find Food and Friends..." ref="search" />
         </form>
       </div>
       <div>
         <Link to="/index"><button className="x-button"><i className="fa fa-times search-x"></i></button></Link>
       </div>
       <div className="r-view-div">

       <div className="r-view-im"><img className="dat-pic" src={restaurant.featured_image} /></div>
       <h1 className="r-name-view">{restaurant.name}</h1>
       <h1 className="r-view-info cuisine-type">{restaurant.cuisines} | {restaurant.location.city}</h1>

       </div>
       {this.hasRestaurant &&
         <div className="other-stuff">
           <h2 className="r-view-info">{restaurant.currency}{restaurant.average_cost_for_two}</h2>
           <h1 className="r-view-info">Average Rating:{restaurant.user_rating.aggregate_rating}</h1>
           <h1 className="r-view-info">{restaurant.user_rating.rating_text}</h1>
           <h1 className="r-view-info">{restaurant.user_rating.votes}</h1>
           <h1 className="r-view-info">{restaurant.location.address}</h1>
           <h1 className="r-view-info">{restaurant.location.zipcode}</h1>
         </div>
       }

     </div>
   );
 }
});

export default Restaurant;

// <button onClick={this.handleFavorite}>Favorite</button>
