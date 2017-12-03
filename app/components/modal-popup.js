/**
 * Created by Anushka Getamanna on 9/28/2016.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  //init: function() {
  //},

  show: function() {
    this.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('close');
    }.bind(this));
  }.on('didInsertElement'),

  actions: {
    ok: function() {
      this.$('.modal').modal('hide');
      this.sendAction('ok');
    }
  }
});
