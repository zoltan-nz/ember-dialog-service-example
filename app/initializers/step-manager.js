import StepManager from 'footnote-app/services/step-manager';

export function initialize(application) {
  application.register('service:step-manager', StepManager, { singleton: false });
}

export default {
  name: 'step-manager',
  initialize
};
