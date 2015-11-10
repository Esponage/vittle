import React from 'react';
import {History, Route, RouteHandler, Link} from 'react-router';
import store from '../store';


var Login = React.createClass({

  mixins: [ History ],

  componentDidMount: function() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '124289031264807',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use version 2.1
      });

      // Now that we've initialized the JavaScript SDK, we call
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.
      FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

handleLogin: function(authData) {
  var { location } = this.props;
  FB.api('/me', function(response) {
    console.log(response);
    var expiration = new Date();
    expiration.setTime(authData.expiresIn * 1000);
    var userData = {
      name: response.name,
      authData: {
        facebook: {
          id: authData.userID,
          access_token: authData.accessToken,
          expiration_date: expiration
        }
      }
    };
    store.getSession().authenticate(userData).then((loggedIn) => {
      this.history.replaceState({}, '/index');
    });
  });
},

// This is called with the results from from FB.getLoginStatus().
statusChangeCallback: function(response) {
  console.log('statusChangeCallback');
  console.log(response);

  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    this.handleLogin(response.authResponse);
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }
},

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
checkLoginState: function() {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  }.bind(this));
},

handleClick: function() {
  FB.login(this.checkLoginState());
},

logOut: function() {
  FB.getLoginStatus(function(response) {
      if (response && response.status === 'connected') {
          FB.logout(function(response) {
              document.location.reload();
          });
      }
  });
},

  render(){
    return (
          <div>
            <div className="vid-div">
              <video className="bgvid" src="bgvid2.mp4" type="video/mp4" autoPlay="autoplay" muted="muted" preload="auto" loop />
            </div>
            <div className="button-logs">
              <button className="go-button" type="button" name="button" onClick={this.handleClick}>Login with Facebook</button>
            </div>
          </div>
        );
      }
});
export default Login;
