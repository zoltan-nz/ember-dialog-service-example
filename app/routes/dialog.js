import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate(controller, model) {
    this.render({
      outlet: 'modal',
      into: 'application'
    });
  },

  actions: {
    close() {
      this.replaceWith('index');
    }
  }
});
