/**
 * Created by Anushka Getamanna on 10/27/2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function(name) {
      this.render('popups.' + name, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function () {
      Ember.$('.modal').modal('hide');
    }
  }
});

