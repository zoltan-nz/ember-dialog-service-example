import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const product = this.modelFor('product');

    return product.get('sales');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('dialogModel', { message: 'from Sales' });
  }

});
