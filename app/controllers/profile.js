/**
 * Created by Anushka Getamanna on 11/8/2016.
 */
import Ember from 'ember';
import myProfile from '../models/my-profile';

export default Ember.Controller.extend({
  init: function () {
    this._super();

    this.set('myProfile', myProfile.user);
  },

  actions: {
    logout: function() {
      alert('logout');
    }
  }
});
