/**
 * Created by Chanaka Athurugiriya on 10/17/2016.
 */
import Ember from 'ember';
import User from '../config/registration-config';
import LoggedUser from '../models/my-profile';

export default (function () {

  var getUserObject = function () {
    var user = {};

    user.firstName = Ember.get(User.view.regView1.field[0], 'fname');
    user.lastName = Ember.get(User.view.regView1.field[0], 'lname');
    user.email = Ember.get(User.view.regView1.field[0], 'email');
    user.username = Ember.get(User.view.regView1.field[0], 'email');
    user.password = Ember.get(User.view.regView1.field[0], 'password');
    user.country = Ember.get(User.view.regView2.field[0], 'country');
    user.city = Ember.get(User.view.regView2.field[0], 'city');
    user.gender = Ember.get(User.view.regView2.field[0], 'gender');
    user.height = Ember.get(User.view.regView2.field[0], 'height');
    user.birthday = new Date(Ember.get(User.view.regView2.field[0], 'dateOfBirthYear') + '-' + getMonth(Ember.get(User.view.regView2.field[0], 'dateOfBirthMonth')) + '-15');
    user.createdDate = new Date();
    user.relegion = Ember.get(User.view.regView2.field[0], 'relegion');
    user.motherTongue = Ember.get(User.view.regView2.field[0], 'motherTongue');
    user.educationStatus = Ember.get(User.view.regView3.field[0], 'highestEducation');
    user.salary = Ember.get(User.view.regView3.field[0], 'salary');
    user.myself = Ember.get(User.view.regView5.field[0], 'myself');
    user.familyBackground = Ember.get(User.view.regView6.field[0], 'myFamily');
    user.educationBackgroung = Ember.get(User.view.regView7.field[0], 'education');
    user.lookingFor = Ember.get(User.view.regView8.field[0], 'lookingFor');
    user.facebookUrl = Ember.get(User.view.regView9.field[0], 'facebook');
    user.linkdinUrl = Ember.get(User.view.regView9.field[0], 'linkedin');
    user.nicNumber = Ember.get(User.view.regView9.field[0], 'NIC');
    user.mobileNumber = Ember.get(User.view.regView9.field[0], 'phoneNo');
    user.status = "";
    //user.imageFile = "";

    return user;
  };

  var getMonth = function (month) {
    var val;
    switch (month) {
      case "January":
        val = 1;
        break;
      case "February":
        val = 2;
        break;
      case "March":
        val = 3;
        break;
      case "April":
        val = 4;
        break;
      case "May":
        val = 5;
        break;
      case "June":
        val = 6;
        break;
      case "July":
        val = 7;
        break;
      case "August":
        val = 8;
        break;
      case "September":
        val = 9;
        break;
      case "October":
        val = 10;
        break;
      case "November":
        val = 11;
        break;
      case "December":
        val = 12;
        break;
      default :
        val = 1;
    }
    return val;
  };

  var setLoggedUser = function (obj){

    Ember.set(LoggedUser.user, 'id', obj.userId);
    Ember.set(LoggedUser.user, 'fullName', obj.firstName + " " + obj.lastName);
    //Ember.set(LoggedUser.user, 'email', obj.email);
    //Ember.set(LoggedUser.user, 'username', obj.username);
    Ember.set(LoggedUser.user, 'country', obj.country);
    Ember.set(LoggedUser.user, 'city', obj.city);
    Ember.set(LoggedUser.user, 'gender', obj.gender);
    Ember.set(LoggedUser.user, 'height', obj.height);
    Ember.set(LoggedUser.user, 'birthday', obj.birthday);
    //Ember.set(LoggedUser.user, 'id', obj.createdDate);
    Ember.set(LoggedUser.user, 'religion', obj.relegion);
    Ember.set(LoggedUser.user, 'motherTongue', obj.motherTongue);
    Ember.set(LoggedUser.user, 'educationStatus', obj.educationStatus);
    Ember.set(LoggedUser.user, 'salary', obj.salary);
    Ember.set(LoggedUser.user, 'myself', obj.myself);
    Ember.set(LoggedUser.user, 'familyBackground', obj.familyBackground);
    Ember.set(LoggedUser.user, 'education', obj.educationBackgroung);
    Ember.set(LoggedUser.user, 'lookingFor', obj.lookingFor);
    //Ember.set(LoggedUser.user, 'facebookUrl', obj.facebookUrl);
    //Ember.set(LoggedUser.user, 'linkdinUrl', obj.linkdinUrl);
    //Ember.set(LoggedUser.user, 'nicNumber', obj.nicNumber);
    //Ember.set(LoggedUser.user, 'mobileNumber', obj.mobileNumber);
    Ember.set(LoggedUser.user, 'img', obj.imageUrl);

  };

  return {
    getUserObject: getUserObject, // class signature
    setLoggedUser: setLoggedUser
  };
})();


