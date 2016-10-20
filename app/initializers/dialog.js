export function initialize(application) {
  application.inject('route', 'dialog', 'service:dialog');
  application.inject('controller', 'dialog', 'service:dialog');
  application.inject('component', 'dialog', 'service:dialog');
}

export default {
  name: 'dialog',
  initialize
};
