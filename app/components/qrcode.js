import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import $ from 'jquery';

var Qrcode = React.createClass ({

  render (){
    return (
      <div>
      <nav className="top-nav2">
        <Link to="/deals"><button className="profile-button"><i className="fa fa-angle-left"></i></button></Link>
      </nav>
        <div className="qr-div">
          <img className="qrcode" src="../public/assets/images/qr.jpg" alt="" />
          <div className="discount-deal"><h1 className="dealio">10% Off</h1></div>
        </div>
        <button className="save-deal">Save this Deal!</button>
      </div>
    );
  }
});

export default Qrcode;
