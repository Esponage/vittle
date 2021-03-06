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
  var user_rating = restaurant.user_rating || {};
  var location = restaurant.location || {};
 //  if(restaurant.user_rating && restaurant.user_rating.aggregate_rating){
 //    this.hasRestaurant = true;
 //    console.log(restaurant.user_rating.aggregate_rating);
 //  }
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
      <img className="dat-pic" src={restaurant.featured_image} />
      <h1 className="r-name-view">{restaurant.name}</h1>
      </div>
      <h1 className="r-view-info cuisine-type">{restaurant.cuisines} | {location.city}</h1>
      <h1 className="r-view-info ratings"> Restaurant Rating: {user_rating.aggregate_rating} | {user_rating.rating_text}</h1>
      <div>
        <div className="map-im"><img src="../public/assets/images/map.jpg" alt=""><h1 className="r-view-info address-loc">{location.address}</h1></img></div>
      </div>
      <div>
      <li className="but fut"><button className="booty">Hours</button></li>
      <li className="but mut"><button className="booty">$$$</button></li>
      <li className="but"><button className="booty">Menu</button></li>
      <li className="but"><button className="booty">Website</button></li>
      </div>


    </div>
  );
}
});

export default Restaurant;

export default Restaurant;

// <button onClick={this.handleFavorite}>Favorite</button>
