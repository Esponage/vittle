import Backbone from 'backbone';

var Location = Backbone.Collection.extend({

  url(){
    return "http://localhost:5050/api/v2.1/geocode?lat=" + this.latitude + "&lon=" + this.longitude;
  },

  setLocation(latitude, longitude) {
    console.log(latitude, longitude);
    this.latitude = latitude;
    this.longitude = longitude;
  },

  parse(response) {
    return response;
  }

})

export default Location;
