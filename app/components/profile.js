import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import Login from '../components/login';
import $ from 'jquery';

var Profile = React.createClass ({

  logOut: function() {
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
            FB.logout(function(response) {
                document.location.reload();
            });
        }
    });
  },

  render (){
    return (
      <div>
      <div>
        <header className="profile-header">
          <Link to="/index"><button className="back-button"><i className="fa fa-times"></i></button></Link>
          <img className="profile-pic" src="https://pbs.twimg.com/profile_images/659358689132957696/VUuMaLOq.jpg" alt="profile picture" />
          <h1 className="profile-name">Anthony Bluemmel</h1>
        </header>
      </div>
        <div className="tab-container">
          <ul className="circle-list">
              <li className="fa-star circles"></li>
              <Link to="/deals"><li className="fa-bell-o circles2"></li></Link>
              <li className="fa-user-plus circles3"></li>
              <li className="fa-beer circles4"></li>
          </ul>
        </div>
        <div>
            <button className="sign-out-button" type="button" name="button" onClick={this.logOut}>Sign Out</button>
        </div>
      </div>
    )
  }
});

export default Profile;
