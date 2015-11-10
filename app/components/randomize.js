import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';
import _ from 'underscore';


var Restaurant = React.createClass({

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

  render() {
    return (
      <div>

        <button onClick={this.randomizeRestaurant}>Submit</button>

        <div>
          <form className="top-nav" onSubmit={this.handleSubmit}>
            <input type="search" className="search-box" placeholder="Find Food and Friends..." ref="search" />
          </form>
        </div>
        <div>
          <Link to="/index"><button className="x-button"><i className="fa fa-times search-x"></i></button></Link>
        </div>
        <div className="is-searching not-searching">
          <ul className="search-results-ul">
            {this.state.restaurants.map((result) => <div key={result.restaurant.R.res_id}><img src={result.restaurant.featured_image}/><li className="search-results">{result.restaurant.name}</li> <li>{result.restaurant.cuisines}</li><li>{result.restaurant.currency}{result.restaurant.average_cost_for_two}</li><li>{result.restaurant.location.city}</li>
          <li>{result.restaurant.user_rating.aggregate_rating}</li>          <button onClick={this.randomizeRestaurant}>Submit</button>
</div> )}
          </ul>
      </div>
      {this.state.randomRest &&
        <h1>{this.state.randomRest.restaurant.name}</h1>
      }
      </div>
    );
  }
});

export default Restaurant;
