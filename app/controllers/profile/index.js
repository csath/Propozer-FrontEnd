/**
 * Created by Anushka Getamanna on 10/27/2016.
 */
import Ember from 'ember';
import myProfile from '../../models/my-profile';

export default Ember.Controller.extend({
  isAcceptedOn: true,
  isRequestedOn: false,
  isWaitingOn: false,
  friendTopic: 'Your loved once..',
  acceptedClass: 'active-link',

  init: function () {
    this._super();

    this.set('myProfile', myProfile.user);
  }
});
