import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    openModalDialog(model) {

      this.render('modal-dialog', {
        into: 'application',
        outlet: 'modal',
        controller: 'modal-dialog',
        model
      });

    },

    closeModalDialog() {

      this.disconnectOutlet({
        parentView: 'application',
        outlet: 'modal'
      });

    }
  }
});
