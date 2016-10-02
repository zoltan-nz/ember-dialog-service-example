import { JSONAPISerializer } from 'ember-cli-mirage';
import Ember from 'ember';

export default JSONAPISerializer.extend({

  serialize(response, request) {

    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    if (Ember.isArray(json.data)) {
      json.data.map((product) => {
        let detailData = product.relationships.detail.data;
        product.relationships.detail.data = Ember.isArray(detailData) ? detailData[0] : detailData;
        return product;
      });
    } else {
      let productData = json.data;
      let detailData = productData.relationships.detail.data;
      productData.relationships.detail.data = Ember.isArray(detailData) ? detailData[0] : detailData;
      json.data = productData;
    }

    return json;
  }
});
