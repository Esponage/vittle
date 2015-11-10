import Backbone from 'backbone';

var Restaurant = Backbone.Collection.extend({

  url(){
    return "http://localhost:5050/api/v2.1/restaurant?res_id=" + this.id;
  },

  setRestaurant(id) {
    this.id = id;
  },

  parse(response) {
    return response;
  }

})

export default Restaurant;
