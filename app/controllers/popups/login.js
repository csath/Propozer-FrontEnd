/**
 * Created by Anushka Getamanna on 9/28/2016.
 */
import Ember from 'ember';
import HTTP from '../../helpers/HTTPRequest';
import Mapper from '../../helpers/ObjectMapper';

export default Ember.Controller.extend({
  isDisabled: '',

  checkEmail: function (value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  },

  actions: {
    login: function () {

      var enteredEmail = this.get('email');
      var enteredPassword = this.get('password');
      var email, password;
      var controller =  this;

      if (enteredEmail) {
        if (this.checkEmail(enteredEmail)) {
          email = enteredEmail;
          this.set('emailMessage', '');

        } else {
          this.set('emailMessage', 'Invalid Email');
        }
      } else {
        this.set('emailMessage', 'Email is Required');
      }

      if (enteredPassword) {
        password = enteredPassword;
        this.set('passwordMessage', '');
      } else {
        this.set('passwordMessage', 'Password is Required.');
      }

      if (email && password) {
        HTTP.login(email,password)
          .done(function (data) {
            if(data.status == "SUCCESS"){
              Mapper.setLoggedUser(data.loggedUserDto);
              Ember.$('.modal').modal('hide');
              controller.set('email','');
              controller.set('password','');
              controller.transitionToRoute('profile');
            }
            else if(data.status == "FAILED"){
              // if username or password incorrect show the error msg
              alert(data.msg);
            }
          })
          .fail(function () {
            alert("failed")
          });
      }
    }
  }
});
