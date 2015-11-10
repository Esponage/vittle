import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import $ from 'jquery';

var Deals = React.createClass ({

  render (){
    return (
      <div>
      <nav className="top-nav2">
        <Link to="/profile"><button className="profile-button"><i className="fa fa-angle-left"></i></button></Link>
        <button className="search-button"><i className="fa fa-search"></i></button>
      </nav>
        <ul className="deals">
          <Link to="/qrcode"><li>
            <h5 className="r-title"><b>TakoSushi</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"><span> 0.4 Miles Away</span></i></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>Trio - A Brick Oven Cafe</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 0.7 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>Trappe Door</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 1.1 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>The Cazbah</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 1.3 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>Blue Ridge Brewing</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 1.7 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>Gringos</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 1.9 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>The Lazy Goat</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 2.3 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>Tupelo Honey Cafe</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 2.6 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>Sip Tasting Room and Rooftop Lounge</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 2.7 Miles Away</span></div>
          </li></Link>
          <Link to="/qrcode"><li className="deals-list">
            <h5 className="r-title"><b>Grouchos Deli</b> posted a deal!</h5>
            <div className="bottom-deal"><i className="fa fa-map-marker"></i><span> 3.1 Miles Away</span></div>
          </li></Link>
        </ul>
      </div>
    );
  }
});

export default Deals;
