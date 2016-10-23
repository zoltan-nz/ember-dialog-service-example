import Ember from 'ember';

const {
  Service,
  computed,
  computed: { alias }
} = Ember;
export default Service.extend({

  stepIndex: 0,
  steps: [],
  isAction: false,

  activeStep: computed('stepIndex', 'steps', function() {
    const stepIndex = this.get('stepIndex');
    const steps = this.get('steps');


    return steps[stepIndex];
  }),

  nextStep: computed('stepIndex', 'steps', function() {
    const stepIndex = this.get('stepIndex') + 1;
    const steps = this.get('steps');

    return steps[stepIndex];
  }),

  previousStep: computed('stepIndex', 'steps', function() {
    const stepIndex = this.get('stepIndex') - 1;
    const steps = this.get('steps');

    return steps[stepIndex];
  }),

  applicationController() {
    return Ember.getOwner(this).lookup('controller:application');
  },

  activeComponent: alias('activeStep.component'),

  next() {
    this.incrementProperty('stepIndex');
    this.set('isAction', true);
    this._changeStep();
  },

  previous() {
    this.decrementProperty('stepIndex');
    this.set('isAction', true);
    this._changeStep();
  },

  _changeStep() {
    const appCont = this.applicationController();
    appCont.removeObserver('step');
    appCont.addObserver('step', () => {
      this._manageHistoryBackButton();
    });

    appCont.set('step', this.get('activeStep.name'));
  },

  _manageHistoryBackButton() {
    if (this.get('isAction')) {
      this.set('isAction', false);
      return;
    }

    const qpStep = this.applicationController().get('step');

    if (this.get('previousStep.name') === qpStep) {
      this.previous();
    }

    if (this.get('nextStep.name') === qpStep) {
      this.next();
    }
  }
});
