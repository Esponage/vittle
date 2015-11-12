import Backbone from 'backbone';
import _ from 'underscore';
import store from '../store';
import User from './user';

const FavoriteRestaurantsCollection = Backbone.Model.extend({
  model: FavoriteRestaurant,
  url: "https://parse.com/1/classes/FavoriteRestaurant" + Backbone.Collection.prototype.url.apply(this, arguments) + "?include=creator,restaurant",


  parse(response) {
    return response.results;
  },

});

export default Comment;
