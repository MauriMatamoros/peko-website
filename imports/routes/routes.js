import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import App from '../ui/App';
import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Packages from '../ui/Packages';
import ShowCase from '../ui/ShowCase';


const unauthenticatedPages = ['/', '/signup', '/login'];
const authenticatedPages = ['/packages'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/packages');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

 if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={onEnterPublicPage}/>
    <Route path="/showcase" component={ShowCase} onEnter={onEnterPublicPage}/>
    <Route path="/login" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/packages" component={Packages} onEnter={onEnterPrivatePage}/>
  </Router>
);
