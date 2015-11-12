import React from 'react';
import {Route, RouteHandler, Link, History} from 'react-router';
import store from '../store';
// import Search from '../components/search';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';
import location from '../models/location';
import _ from 'underscore';


var Index = React.createClass({

propTypes: {
 locations: React.PropTypes.object
},

mixins: [BackboneMixin, History],

getDefaultProps() {
 return {
   locations: store.getLocation()
 };
},

componentWillMount() {
 this.props.locations.on('add change remove', this.forceUpdate.bind(this, null), this);
 navigator.geolocation.getCurrentPosition((position) => {
   this.props.locations.setLocation(position.coords.latitude, position.coords.longitude);
   this.props.locations.fetch({success: () => {
   }})
 })
},

componentWillUnmount() {
 this.props.locations.off('add change remove', null, this);
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

randomizeRestaurant(e) {
 e.preventDefault();
 var sample = _.sample(this.locations);
 console.log(sample);
 console.log(this.locations);
 this.setState({
   randomRest: sample
 })
  e.preventDefault();
  var sample = _.sample(this.locations);
  console.log(sample);
  // console.log(this.locations);
  // this.setState({
  //   randomRest: sample
  // })
  this.history.pushState({}, '/restaurant/' + sample.restaurant.id);
},

 render() {
   var hasLocations;
   if (this.props.locations.length > 0) {
     hasLocations = true;
     this.locations = _.map(this.props.locations.models[0].attributes.nearby_restaurants);
   } else {
     hasLocations = false;
   }


   return (
     <div>
       <nav className="top-nav2">
         <Link to="/profile"><button className="profile-button"><i className="fa fa-user"></i></button></Link>
         <Link to="/search"><button className="search-button"><i className="fa fa-search"></i></button></Link>
       </nav>
       <button onClick={this.randomizeRestaurant} className="randomize-button"><i className="fa fa-cutlery fork"></i></button>
         {this.state.randomRest &&
           <li>{this.state.randomRest.restaurant.name}</li>

         }
         {hasLocations &&
           <div>
             {this.locations.map((result)=>

               <Link className="butts" key={result.restaurant.R.res_id} to={`/restaurant/${result.restaurant.id}`}>
                <div className="search-results clearfix" key={result.restaurant.R.res_id}>
                <img className="dash-pic" src={result.restaurant.featured_image}></img>
                <li className="r-name">{result.restaurant.name}</li>
                <li className="fa-location-arrow r-location">{result.restaurant.location.city}</li>
                <li className="r-cost"><i className="fa fa-crosshairs"></i></li></div>

               </Link>
            )}

         </div>
         }

     </div>
   );
 }
});

export default Index;
