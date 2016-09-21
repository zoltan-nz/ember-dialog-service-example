import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  sales: hasMany(),
  detail: belongsTo()
});
