/**
 * Created by Anushka Getamanna on 10/28/2016.
 */
import Ember from 'ember';
import userProfile from '../../models/user-profile';
import Image from '../../config/images-path';

export default Ember.Controller.extend({
  isNameShow: true,

  init: function () {
    this._super();

    this.set('userProfile', userProfile.user);
    this._createView(userProfile.user);
  },

  _createView: function (user) {
    if (user.isAccepted === false) {
      this.set('isNameShow', false);

      if (user.gender === 'Male') {
        Ember.set(user, 'img', '../' + Image.userMale.path);
      } else {
        Ember.set(user, 'img', '../' + Image.userMale.path);
      }
    }

    switch (user.pageRank) {
      case 0:
        this.set('percentage', '10%');
        this.set('isRank1', false);
        this.set('isRank2', false);
        this.set('isRank3', false);

        break;
      case 1:
        this.set('percentage', '40%');
        this.set('isRank1', false);
        this.set('isRank2', true);
        this.set('isRank3', false);
        break;
      case 2:
        this.set('percentage', '70%');
        this.set('isRank1', false);
        this.set('isRank2', true);
        this.set('isRank3', false);
        break;
      case 3:
        this.set('percentage', '100%');
        this.set('isRank1', false);
        this.set('isRank2', false);
        this.set('isRank3', true);
        break;
      default:
        break;
    }

    this.set('userProfile', user);

  },

  actions: {
    closeModal: function () {
      Ember.$('.modal').modal('hide');
    }
  }
});
