import Service from 'ember-service';
import getOwner from 'ember-owner/get';

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

    const appCtrl = this.applicationController();
    appCtrl.set('showDialog', true);
    appCtrl.addObserver('showDialog', () => { this.close(); });
  },

  close() {

    this.applicationRoute().disconnectOutlet({
      outlet: 'modal',
      parentView: 'application'
    });

    const appCtrl = this.applicationController();
    appCtrl.removeObserver('showDialog');
    appCtrl.set('showDialog', false);
  }
});
