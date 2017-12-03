/**
 * Created by Chanaka Athurugiriya on 11/16/2016.
 */

import Ember from 'ember';
import User from '../config/registration-config';
import HTTP from '../helpers/HTTPRequest';

export default Ember.Component.extend({

  actions: {
    uploadPhoto: function () {
      var imageFile = Ember.$('#imageUpload')[0].files;
      HTTP.uploadProfilePic(imageFile[0])
        .done(function (data) {
          if (data.status == 'SUCCESS') {
            Ember.set(User.view.regView4.field[0], "profPic", data.msg);
           // this.set('imageMessage', '');
            alert(data.msg);
          } else {
            Ember.set(User.view.regView4.field[0], "profPic", '');
            //controller.set('imageMessage', 'Profile picture is Required');
            alert(data.msg);
          }
        }).fail(function () {
          Ember.set(User.view.regView4.field[0], "profPic", '');
          //this.set('imageMessage', 'Profile picture is Required');
          alert("failed");
        });

    },
  }
});
