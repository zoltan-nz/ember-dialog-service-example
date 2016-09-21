import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const product = this.modelFor('product');

    return product.get('detail');
  }
});
