import Ember from 'ember';

export default Ember.Component.extend({

  stepManager: Ember.inject.service(),

  actions: {
    next() {
      this.get('stepManager').next();
    },

    back() {
      this.get('stepManager').back();
    }
  }
});
