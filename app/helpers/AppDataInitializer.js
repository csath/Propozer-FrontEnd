/**
 * Created by Chanaka Athurugiriya on 11/8/2016.
 */
import Ember from 'ember';
import HTTP from './HTTPRequest';
import OptionValues from '../config/option-values';

export default (function () {

  var initDefaultData = function () {
    setCountry();
    setCity();
    setHeight();
    setReligion();
    setMotherTongue();
    setSalary();
  };

  var i = 0;

  var setCountry = function () {
    HTTP.getCountryList()
      .done(function (data) {
        Ember.set(OptionValues.options, "country", data);
      })
      .fail(function () {
        if (i < 3) {
          i++;
           setCountry();
        }
        else {
          i=0;
        }
      });
  };

  var setCity = function () {
    HTTP.getCityList()
      .done(function (data) {
        Ember.set(OptionValues.options, "city", data);
      })
      .fail(function () {
        if (i < 3) {
          i++;
          setCity();
        }
        else {
          i=0;
        }
      });
  };

  var setHeight = function () {
    HTTP.getHeightList()
      .done(function (data) {
        Ember.set(OptionValues.options, "height", data);
      })
      .fail(function () {
        if (i < 3) {
          i++;
          setHeight();
        }
        else {
          i=0;
        }
      });
  };

  var setReligion = function () {
    HTTP.getReligionList()
      .done(function (data) {
        Ember.set(OptionValues.options, "relegion", data);
      })
      .fail(function () {
        if (i < 3) {
          i++;
          setReligion();
        }
        else {
          i=0;
        }
      });
  };

  var setMotherTongue = function () {
    HTTP.getMotherTongueList()
      .done(function (data) {
        Ember.set(OptionValues.options, "motherTongue", data);
      })
      .fail(function () {
        if (i < 3) {
          i++;
          setMotherTongue();
        }
        else {
          i=0;
        }
      });
  };

  var setSalary = function () {
    HTTP.getIncomeList()
      .done(function (data) {
        Ember.set(OptionValues.options, "salary", data);
      })
      .fail(function () {
        if (i < 3) {
          i++;
          setSalary();
        }
        else {
          i=0;
        }
      });
  };

  return {
    initDefaultData: initDefaultData
  };
})();
