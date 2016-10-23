import Ember from 'ember';

const {
  inject,
  Controller
} = Ember;


const COMPONENT_STEPS =
  [
    {
      name: 'form',
      component: 'instant-help-form'
    },
    {
      name: 'confirm',
      component: 'instant-help-confirm'
    },
    {
      name: 'thankyou',
      component: 'instant-help-thankyou'
    }
  ];

export default Controller.extend({

  init() {
    this._super();

    this.set('stepManager.steps', COMPONENT_STEPS);
  },

  stepManager: inject.service(),

  actions: {
    next() {
      this.get('stepManager').next();
    },

    previous() {
      this.get('stepManager').previous();
    }
  }
});
