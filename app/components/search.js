import React from 'react';
import ReactDOM from 'react-dom';
import {Route, RouteHandler, Link} from 'react-router';
import Infinite from 'react-infinite';
import store from '../store';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';
import _ from 'underscore';


var Search = React.createClass({

 mixins: [BackboneMixin],

 getModels() {
   return {
     restaurants: store.getRestaurants()
   };
 },

 handleSubmit(e) {
   e.preventDefault();
   let search = this.refs.search.value;
   store.searchRestaurants(search);
 },
 render() {
   return (
     <div>
         <div className="search-container">
           <form className="top-nav" onSubmit={this.handleSubmit}>
             <input type="search" className="search-box" placeholder="Find Food and Friends..." ref="search" />
           </form>
         </div>
         <div>
           <Link to="/index"><button className="x-button"><i className="fa fa-times search-x"></i></button></Link>
         </div>
               {this.state.restaurants.map((result) =>
                 <Link className="butts" to={`/restaurant/${result.restaurant.id}`}>
                 <div className="search-results clearfix" key={result.restaurant.R.res_id}>
                   <img className="dash-pic" src={result.restaurant.featured_image}></img>
                   <li className="r-name">{result.restaurant.name}</li>
                   <li className="r-location">{result.restaurant.location.city}</li>
                 </div>
                </Link>

              )}
              </div>
   );
 }
});

export default Search;
