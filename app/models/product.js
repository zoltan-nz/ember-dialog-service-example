import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  isFood: DS.attr('boolean'),
  isClothes: DS.attr('boolean'),
  isFurniture: DS.attr('boolean'),

  price: DS.attr('number'),

  sales: DS.hasMany('sale'),
  detail: DS.belongsTo('detail')
});
