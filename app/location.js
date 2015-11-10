import _ from 'underscore';
import $ from 'jquery';

export default {
    getPositon() {
         return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    },

    coordinates(geo) {
        return {
            lat: geo.coords.latitude,
            lng: geo.coords.longitude,
        };
    },

    getLocation(position) {
        return new Promise(function(resolve, reject) {
            console.log(position);
            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position + '&key=AIzaSyDqwbtiDMy76lI2fi_O0GJUkEhRCc3lW2Y',
                success: resolve,
                error: reject,
            });
        });
    }
};
