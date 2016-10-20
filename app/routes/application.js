import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    instantHelp() {
      this.dialog.open('instant-help');
    }
  }
});
