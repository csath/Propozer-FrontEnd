import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('profile');
  this.route('profile', function() {
    this.route('edit');
    this.route('search');
    this.route('friend');
    this.route('message');
  });
});

//Router.map(function() {
//  this.route('posts', function() {
//    this.route('favorites');
//  });
//});

export default Router;
