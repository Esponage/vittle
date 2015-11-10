import Backbone from 'backbone';
import _ from 'underscore';
import store from '../store';
import $ from 'jquery';
import '../jsonpproxy.js';

var RestaurantCollection = Backbone.Collection.extend({
  page: 0,
 url() {
   // return "https://jsonp.afeld.me/?url=" + encodeURIComponent("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + this.search + "&key=AIzaSyC-Q2PvTSqrIoZpPWF9rlTcDoIJtxVZQcM&libraries=places");
     return "http://localhost:5050/api/v2.1/search?q=" + this.search + "&start=" + this.page;
 },

 setSearch(search) {
   this.search = search;
 },

 nextPage() {
   this.page = this.page + 19;
 },

 prevPage() {
  this.page = this.page - 19;
},

 parse(response) {
   console.log(response);
   return response.restaurants;
 }

});

export default RestaurantCollection;
