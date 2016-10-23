import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['showDialog', 'step'],
  showDialog: false,
  step: null

});
