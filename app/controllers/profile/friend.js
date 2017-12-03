/**
 * Created by Anushka Getamanna on 10/27/2016.
 */
import Ember from 'ember';
import friendList from '../../models/manage-friend';
//import SelectOption from '../../config/option-values';
//import NewUser from '../../config/user';

export default Ember.Controller.extend({
  isAcceptedOn: true,
  isRequestedOn: false,
  isWaitingOn: false,
  friendTopic: 'Your loved once..',
  acceptedClass: 'active-link',

  init: function () {
    this._super();

    this.set('acceptedList', friendList.acceptedList);
    this.set('requestedList', friendList.requestedList);
    this.set('waitingList', friendList.waitingList);
  },

  actions: {
    showAcceptedList: function() {
      this.set('isAcceptedOn', true);
      this.set('isRequestedOn', false);
      this.set('isWaitingOn', false);
      this.set('friendTopic','Your loved once...');
      this.set('acceptedClass', 'active-link');
      this.set('requestedClass', '');
      this.set('waitingClass', '');
    },

    showRequestedList: function() {
      this.set('isAcceptedOn', false);
      this.set('isRequestedOn', true);
      this.set('isWaitingOn', false);
      this.set('friendTopic','Waiting for your response...');
      this.set('acceptedClass', '');
      this.set('requestedClass', 'active-link');
      this.set('waitingClass', '');
    },

    showWaitingList: function() {
      this.set('isAcceptedOn', false);
      this.set('isRequestedOn', false);
      this.set('isWaitingOn', true);
      this.set('friendTopic','Be patient...');
      this.set('acceptedClass', '');
      this.set('requestedClass', '');
      this.set('waitingClass', 'active-link');
    }
  }
});
