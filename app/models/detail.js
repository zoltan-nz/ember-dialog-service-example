import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  color: DS.attr('string'),

  product: DS.belongsTo('product')
});
