import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('product');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('dialogModel', { message: 'from Index' });
  }
});
