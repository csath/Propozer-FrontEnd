/**
 * Created by Anushka Getamanna on 11/2/2016.
 */
/**
 * Created by Anushka Getamanna on 10/27/2016.
 */
import Ember from 'ember';
import searchResults from '../../models/search-results';
import friendList from '../../models/manage-friend';
//import SelectOption from '../../config/option-values';
//import NewUser from '../../config/user';

export default Ember.Controller.extend({
  init: function () {
    this._super();
    this.set('results', searchResults.results);
  }
});
