import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    showDialog() {
      this.render('dialog', {
        outlet: 'modal',
        into: 'application',
        controller: 'dialog'
      });
    }
  }
});
