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

 // buildElements: function(start, end) {
 //      var restaurants = [];
 //      for (var i = start; i < end; i++) {
 //          elements.push(<Search key={i} index={i}/>)
 //      }
 //      return elements;
 //  },
 //
 //  handleInfiniteLoad: function() {
 //      var that = this;
 //      this.setState({
 //          isInfiniteLoading: true
 //      });
 //      setTimeout(function() {
 //          var elemLength = that.state.elements.length,
 //              newElements = that.buildElements(elemLength, elemLength + 20);
 //          that.setState({
 //              isInfiniteLoading: false,
 //              elements: newElements.concat(that.state.elements)
 //          });
 //      }, 2000);
 //  },
 //
 // nextPage() {
 //     store.nextPage().then((results) => {
 //
 //     });
 //     console.log("hello");
 // },

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
         <Infinite containerHeight={5000} elementHeight={200} infiniteLoadBeginEdgeOffset={window.innerHeight} onInfiniteLoad={this.nextPage}>
           <div className="is-searching not-searching">
            <ul className="search-results-ul">
               {this.state.restaurants.map((result) => <div className="search-results" key={result.restaurant.R.res_id}><Link to={`/restaurant/${result.restaurant.id}`}><li className="r-name">{result.restaurant.name}</li> <li className="r-cuisine">{result.restaurant.cuisines}</li><li className="r-cost">{result.restaurant.currency}{result.restaurant.average_cost_for_two}</li>
             <li className="r-location">{result.restaurant.location.city}</li><li className="r-rating">{result.restaurant.user_rating.aggregate_rating}</li></Link><li className="r-address"><a className="fa fa-crosshairs" href=""></a></li></div> )}
             </ul>
       </div>
       </Infinite>
     </div>
   );
 }
});

export default Search;
