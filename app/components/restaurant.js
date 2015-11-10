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

 render() {
   var restaurant = this.props.restaurant.toJSON()[0] || {};
   console.log(restaurant.location);
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
       <img src={restaurant.featured_image} />
       <h1>{restaurant.name}</h1>
       <h1>{restaurant.cuisines}</h1>
       <h2>{restaurant.currency}{restaurant.average_cost_for_two}</h2>



     </div>
   );
 }
});

export default Restaurant;

// <h1>Average Rating: {restaurant.user_rating.aggregate_rating}</h1>
// <h1>{restaurant.user_rating.rating_text}</h1>
// <h1>{restaurant.user_rating.votes}</h1>
// <h1>{restaurant.location.address}</h1>
// <h1>{restaurant.location.city}</h1>
// <h1>{restaurant.location.zipcode}</h1>
