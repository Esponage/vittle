import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
// import Search from '../components/search';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';


var Index = React.createClass({

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
  console.log(search);
},

randomizeRestaurant(e) {
  e.preventDefault();
  var sample = _.sample(this.state.restaurants);
  console.log(sample);
  this.setState({
    randomRest: sample
  })
},

  render (){
    return (
      <div>
        <nav className="top-nav2">
          <Link to="/profile"><button className="profile-button"><i className="fa fa-user"></i></button></Link>
          <Link to="/search"><button className="search-button"><i className="fa fa-search"></i></button></Link>
        </nav>
        <button onCLick={this.randomizeRestaurant} className="randomize-button">Random</button>
          {this.state.randomRest &&
            <li>{this.state.randomRest.restaurant.name}</li>
          }
      </div>
    );
  }
});

export default Index;
