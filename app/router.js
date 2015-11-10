import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import Login from './components/login';
import Search from './components/search';
import Profile from './components/profile';
import Restaurant from './components/restaurant';
import Deals from './components/deals';
import Qrcode from './components/qrcode';

import store from './store';

function requireAuth(nextState, replaceState) {
 if( ! store.getSession().isAuthenticated() ) {
   replaceState({ nextPathname: nextState.location.pathname }, '/login');
 }
}

function requireNotAuth(nextState, replaceState) {
 if(store.getSession().isAuthenticated()) {
   replaceState({}, '/');
 }
}

ReactDOM.render((
 <Router>
   <Route path="/" component={App}>
     <IndexRoute component={Index} onEnter={requireAuth} />
     <Route path="login" component={Login} onEnter={requireNotAuth} />
     <Route path="index" component={Index} onEnter={requireAuth} />
     <Route path="search" component={Search} onEnter={requireAuth} />
     <Route path="profile" component={Profile} onEnter={requireAuth} />
     <Route path="restaurant" component={Restaurant} onEnter={requireAuth} />
     <Route path="restaurant/:id" component={Restaurant} onEnter={requireAuth} />
     <Route path="deals" component={Deals} onEnter={requireAuth} />
     <Route path="qrcode" component={Qrcode} onEnter={requireAuth} />
   </Route>
 </Router>
), document.getElementById('application'));
