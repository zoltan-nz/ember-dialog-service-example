import Ember from 'ember';

const {
  Service,
  computed
} = Ember;

export default Service.extend({

  applicationRoute: computed('', function() {
    return Ember.getOwner(this).lookup('route:application');
  }),

  applicationController: computed('', function() {
    return Ember.getOwner(this).lookup('controller:application');
  }),

  open(template, model) {
    this.get('applicationRoute').render(template, {
      outlet: 'modal',
      into: 'application',
      controller: template,
      model
    });

    const appCont = this.get('applicationController');
    appCont.set('showDialog', true);
    appCont.addObserver('showDialog', () => { this.close(); });
  },

  close() {
    console.log('close called');
    this.get('applicationRoute').disconnectOutlet({
      outlet: 'modal',
      parentView: 'application'
    });

    const appCont = this.get('applicationController');
    appCont.removeObserver('showDialog');
    appCont.set('showDialog', false);
  }
});
