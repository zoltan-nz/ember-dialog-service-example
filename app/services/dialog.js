import Ember from 'ember';

const {
  Service,
  getOwner
} = Ember;

export default Service.extend({

  applicationRoute() {
    return getOwner(this).lookup('route:application');
  },

  applicationController() {
    return getOwner(this).lookup('controller:application');
  },

  open(template, model) {

    this.applicationRoute().render(template, {
      outlet: 'modal',
      into: 'application',
      controller: template,
      model
    });

    const appCont = this.applicationController();
    appCont.set('showDialog', true);
    appCont.addObserver('showDialog', () => { this.close(); });
  },

  close() {

    this.applicationRoute().disconnectOutlet({
      outlet: 'modal',
      parentView: 'application'
    });

    const appCont = this.applicationController();
    appCont.removeObserver('showDialog');
    appCont.set('showDialog', false);
  }
});
