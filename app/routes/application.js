/**
 * Created by Anushka Getamanna on 9/27/2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  appLayout: {},
  clickEventHandler: null,

  renderTemplate: function () {
    this._super();

    //this.render('layouts.header', {
    //  into: 'application',
    //  outlet: 'headerOutlet',
    //  controller: this
    //});

    this.render('layouts.footer', {
      into: 'application',
      outlet: 'footerOutlet',
      controller: this
    });
  },

  actions: {
    showModal: function(name) {
      this.render('popups.' + name, {
        into: 'application',
        outlet: 'modal'
      });
    },

    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});

