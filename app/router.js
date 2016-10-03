import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dialog');
  this.route('product', { path: '/:product_id' }, function() {
    this.route('details');
    this.route('sales');
  });
  this.alias('alias-dialog', '/alias-dialog', 'dialog');
});

export default Router;
