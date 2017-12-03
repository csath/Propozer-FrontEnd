/**
 * Created by Chanaka Athurugiriya on 10/17/2016.
 */
import Ember from 'ember';

export default (function () {

  var registerUser = function (user) {
    var formData = new FormData();
    formData.append("userJson", JSON.stringify(user));
    return $.ajax({
      type: 'POST',
      url: "http://localhost:8080/propozer-ws/rest/user/regester",
      processData: false,
      contentType: false,
      crossDomain: true,
      data: formData,
    });
  };

  var uploadProfilePic = function (profilepic) {
    var formData = new FormData();
    formData.append("profilePic", profilepic);
    return $.ajax({
      type: 'POST',
      url: "http://localhost:8080/propozer-ws/rest/user/regester/upload-pro-pic",
      cache: false,
      processData: false,
      contentType: false,
      crossDomain: true,
      data: formData,
    });
  };

  var login = function (uname, pword) {
    var formData = new FormData();
    formData.append('username', uname);
    formData.append('password', pword);
    return $.ajax({
      type: 'POST',
      url: "http://localhost:8080/propozer-ws/rest/login",
      dataType: 'json',
      crossDomain: true,
      processData: false,
      contentType: false,
      data: formData,
    });
  };

  var checkUsername = function (uname) {
    var formData = new FormData();
    formData.append('username', uname);
    return $.ajax({
      type: 'POST',
      url: "http://localhost:8080/propozer-ws/rest/user/regester/verify-username",
      dataType: 'json',
      crossDomain: true,
      processData: false,
      contentType: false,
      data: formData,
    });
  };

  var getAgeList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/age-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  var getHeightList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/height-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  var getCityList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/city-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  var getCountryList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/country-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  var getReligionList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/religion-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  var getMotherTongueList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/mothertounge-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  var getEduStatusList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/edu-status-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  var getIncomeList = function () {
    return $.ajax({
      type: 'GET',
      url: "http://localhost:8080/propozer-ws/rest/regester/income-list",
      dataType: 'json',
      crossDomain: true,
    });
  };

  return {
    registerUser: registerUser, // class signature
    uploadProfilePic: uploadProfilePic,
    login: login,
    checkUsername: checkUsername,
    getAgeList: getAgeList,
    getHeightList: getHeightList,
    getCityList: getCityList,
    getCountryList: getCountryList,
    getReligionList: getReligionList,
    getMotherTongueList: getMotherTongueList,
    getEduStatusList: getEduStatusList,
    getIncomeList: getIncomeList,
  };

})();


