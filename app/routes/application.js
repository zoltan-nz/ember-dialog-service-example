import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    openModalDialog() {

      this.render('modal-dialog', {
        into: 'application',
        outlet: 'modal',
        controller: 'modal-dialog'
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
