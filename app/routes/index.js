import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function () {
    this._super();

    this.render('layouts.header', {
      into: 'index',
      outlet: 'headerOutlet',
      controller: this
    });
  
    //this.render('layouts.footer', {
    //  into: 'application',
    //  outlet: 'footerOutlet',
    //  controller: this
    //});
  },
});
