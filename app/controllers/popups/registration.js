import Ember from 'ember';
import User from '../../config/registration-config';
import SelectOption from '../../config/option-values';
import HTTP from '../../helpers/HTTPRequest';
import Mapper from '../../helpers/ObjectMapper';

export default Ember.Controller.extend({
  regView3: false,
  regView4: true,
  regView5: false,
  regView6: false,
  regView7: false,
  regView8: false,
  regView9: false,

  isDisabled: '',

  init: function () {
    this._super();

    this.set('user', User.view);

    this.set('countryArray', SelectOption.options.country);
    this.set('stateLiveArray', SelectOption.options.stateLive);
    this.set('cityArray', SelectOption.options.city);
    this.set('genderArray', SelectOption.options.gender);
    this.set('heightArray', SelectOption.options.height);
    this.set('dateOfBirthYearArray', SelectOption.options.dateOfBirthYear);
    this.set('dateOfBirthMonthArray', SelectOption.options.dateOfBirthMonth);
    this.set('dateOfBirthDateArray', SelectOption.options.dateOfBirthDate);
    this.set('relegionArray', SelectOption.options.relegion);
    this.set('motherTongueArray', SelectOption.options.motherTongue);
    this.set('salaryArray', SelectOption.options.salary);
    this.set('highestEducationArray', SelectOption.options.highestEducation);
  },


  _setView: function (view) {
    for (var i = 1; i < 10; i++) {
      this.set('regView' + i, false);
    }

    this.set('regView' + view, true);
  },

  checkPassword: function (value) {
    return value.length > 1;
  },

  checkPassword2: function (value) {
    return this.get('password') === value;
  },

  checkAlphabets: function (value) {
    var alphaExp = /^[a-zA-Z]+$/;
    var value2 = value.replace(/\s+/g, '');

    return value2.match(alphaExp);
  },

  checkEmail: function (value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  },

  _checkViewsFields: function (viewName) {
    var fields = User.view[viewName].field[0];
    var isComplete = true;

    Ember.$.each(fields, function (key, element) {
      if (element === '') {
        isComplete = false;
      }
    });

    return isComplete;
  },

  _createUser: function () {
      var u = Mapper.getUserObject(User);
      HTTP.registerUser(u)
        .done(function (data) {
          if(data.status === "SUCCESS"){
            alert(data.msg);
          }
          else if(data.status === "FAILED"){
            alert(data.msg);
          }
        })
        .fail(function () {
          alert("failed");
        });

  },

  actions: {

    register: function () {
      Ember.$('.modal').modal('hide');
    },

    next: function (currentLevel) {
      //Ember.$('.modal').modal('hide');
      this._setView(++currentLevel);
    },

    back: function (currentLevel) {
      this._setView(--currentLevel);
    },

    regView1: function (currentLevel) {
      if (this.get('fname')) {
        if (this.checkAlphabets(this.get('fname'))) {
          Ember.set(User.view.regView1.field[0], "fname", this.get('fname'));
          this.set('fnameMessage', '');

        } else {
          Ember.set(User.view.regView1.field[0], "fname", '');
          this.set('fnameMessage', 'First name is required and only alphabets allow');
        }
      } else {
        Ember.set(User.view.regView1.field[0], "fname", '');
        this.set('fnameMessage', 'First name is required and only alphabets allow');
      }

      if (this.get('lname')) {
        if (this.checkAlphabets(this.get('lname'))) {
          Ember.set(User.view.regView1.field[0], "lname", this.get('lname'));
          this.set('lnameMessage', '');

        } else {
          Ember.set(User.view.regView1.field[0], "lname", '');
          this.set('lnameMessage', 'Last name is required and only alphabets allow');
        }
      } else {
        Ember.set(User.view.regView1.field[0], "lname", '');
        this.set('lnameMessage', 'Last name is required and only alphabets allow');
      }

      if (this.get('email')) {
        if (this.checkEmail(this.get('email'))) {
          Ember.set(User.view.regView1.field[0], "email", this.get('email'));
          this.set('emailMessage', '');
        } else {
          Ember.set(User.view.regView1.field[0], "email", '');
          this.set('emailMessage', 'Invalid email');
        }
      } else {
        Ember.set(User.view.regView1.field[0], "email", '');
        this.set('emailMessage', 'Email is required');
      }

      if (this.get('password')) {
        if (this.checkPassword(this.get('password'))) {
          Ember.set(User.view.regView1.field[0], "password", this.get('password'));
          this.set('passwordMessage', '');

        } else {
          Ember.set(User.view.regView1.field[0], "password", '');
          this.set('passwordMessage', 'Passwords must be have at least 10 characters');
        }
      } else {
        Ember.set(User.view.regView1.field[0], "password", '');
        this.set('passwordMessage', 'Password is required');
      }

      if (this.get('password2')) {
        if (this.checkPassword2(this.get('password2'))) {
          Ember.set(User.view.regView1.field[0], "password2", this.get('password2'));
          this.set('password2Message', '');

        } else {
          Ember.set(User.view.regView1.field[0], "password2", '');
          this.set('password2Message', 'Passwords do not match');
        }
      } else {
        Ember.set(User.view.regView1.field[0], "password2", '');
        this.set('password2Message', 'Please confirm your password');
      }

      if (this._checkViewsFields('regView1')) {
        this._setView(++currentLevel);
      }
    },

    regView2: function (currentLevel) {
      if (this.get('country')) {
        Ember.set(User.view.regView2.field[0], "country", this.get('country').text);
        this.set('countryMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "country", '');
        this.set('countryMessage', 'Country is required');
      }

      if (this.get('stateLive')) {
        Ember.set(User.view.regView2.field[0], "stateLive", this.get('stateLive').text);
        this.set('stateLiveMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "stateLive", '');
        this.set('stateLiveMessage', 'State is required');
      }

      if (this.get('city')) {
        Ember.set(User.view.regView2.field[0], "city", this.get('city').text);
        this.set('cityMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "city", '');
        this.set('cityMessage', 'City is required');
      }

      if (this.get('gender')) {
        Ember.set(User.view.regView2.field[0], "gender", this.get('gender'));
        this.set('genderMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "gender", '');
        this.set('genderMessage', 'Gender is required');
      }

      if (this.get('height')) {
        Ember.set(User.view.regView2.field[0], "height", this.get('height').id);
        this.set('heightMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "height", '');
        this.set('heightMessage', 'Height is required');
      }

      if (this.get('dateOfBirthYear')) {
        Ember.set(User.view.regView2.field[0], "dateOfBirthYear", this.get('dateOfBirthYear').text);
        this.set('yearMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "dateOfBirthYear", '');
        this.set('yearMessage', 'Year is required.');
      }

      if (this.get('dateOfBirthMonth')) {
        Ember.set(User.view.regView2.field[0], "dateOfBirthMonth", this.get('dateOfBirthMonth').text);
        this.set('monthMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "dateOfBirthMonth", '');
        this.set('monthMessage', 'Month is required.');
      }

      if (this.get('relegion')) {
        Ember.set(User.view.regView2.field[0], "relegion", this.get('relegion').text);
        this.set('relegionMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "relegion", '');
        this.set('relegionMessage', 'Religion is required');
      }

      if (this.get('motherTongue')) {
        Ember.set(User.view.regView2.field[0], "motherTongue", this.get('motherTongue').text);
        this.set('motherTongueMessage', '');
      } else {
        Ember.set(User.view.regView2.field[0], "motherTongue", '');
        this.set('motherTongueMessage', 'Language is required');
      }

      if (this._checkViewsFields('regView2')) {
        this._setView(++currentLevel);
      }
    },

    regView3: function (currentLevel) {
      if (this.get('highestEducation')) {
        Ember.set(User.view.regView3.field[0], "highestEducation", this.get('highestEducation').text);
        this.set('highestEducationMessage', '');
      } else {
        Ember.set(User.view.regView3.field[0], "highestEducation", '');
        this.set('highestEducationMessage', 'Education level is required');
      }

      if (this.get('career')) {
        Ember.set(User.view.regView3.field[0], "career", this.get('career'));
      }

      if (this.get('salary')) {
        Ember.set(User.view.regView3.field[0], "salary", this.get('salary').id);
        this.set('salaryMessage', '');
      } else {
        Ember.set(User.view.regView3.field[0], "salary", '');
        this.set('salaryMessage', 'Salary range is required');
      }

      if (this._checkViewsFields('regView3')) {
        this._setView(++currentLevel);
      }
    },

    regView4: function (currentLevel) {
      if(Ember.get(User.view.regView4.field[0], "profPic") == ''){
        this.set('imageMessage', 'Profile picture is required');
      }

      if (this._checkViewsFields('regView4')) {
        this._setView(++currentLevel);
      }
    },

    regView5: function (currentLevel) {
      if (this.get('myself')) {
        Ember.set(User.view.regView5.field[0], "myself", this.get('myself'));
      }

      this._setView(++currentLevel);
    },

    regView6: function (currentLevel) {
      if (this.get('myFamily')) {
        Ember.set(User.view.regView6.field[0], "myFamily", this.get('myFamily'));
      }

      this._setView(++currentLevel);
    },

    regView7: function (currentLevel) {
      if (this.get('education')) {
        Ember.set(User.view.regView7.field[0], "education", this.get('education'));
      }

      this._setView(++currentLevel);
    },

    regView8: function (currentLevel) {
      if (this.get('lookingFor')) {
        Ember.set(User.view.regView8.field[0], "lookingFor", this.get('lookingFor'));
      }

      this._setView(++currentLevel);
    },

    regView9: function () {
      if (this.get('facebook')) {
        Ember.set(User.view.regView9.field[0], "facebook", this.get('facebook'));
      }
      if (this.get('linkedin')) {
        Ember.set(User.view.regView9.field[0], "linkedin", this.get('linkedin'));
      }
      if (this.get('NIC')) {
        Ember.set(User.view.regView9.field[0], "NIC", this.get('NIC'));
      }
      if (this.get('phoneNo')) {
        Ember.set(User.view.regView9.field[0], "phoneNo", this.get('phoneNo'));
      }

      //this._createUser();
      Ember.$('.modal').modal('hide');
      this._createUser();
    }
  }
});
