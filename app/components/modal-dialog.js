import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    close() {
      this.dialog.close();
    }
  }

});
