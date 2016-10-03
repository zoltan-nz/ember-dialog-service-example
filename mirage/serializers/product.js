import { JSONAPISerializer } from 'ember-cli-mirage';
import Ember from 'ember';

const { isArray } = Ember;

export default JSONAPISerializer.extend({

  serialize(response, request) {
    let json = this._serializeToJSON(response, request);
    json.data = this._convertHasManyToBelongsTo(json.data);

    return json;
  },

  _serializeToJSON(response, request) {
    return JSONAPISerializer.prototype.serialize.apply(this, [response, request]);
  },

  _convertHasManyToBelongsTo(productData) {
    return isArray(productData) ? this._processMoreProduct(productData) : this._processOneProduct(productData);
  },

  _processMoreProduct(productData) {
    return productData.map((product) => {
      this._convertDetailsToObject(product);
      return product;
    });
  },

  _processOneProduct(productData) {
    return this._convertDetailsToObject(productData);
  },

  _convertDetailsToObject(product) {
    let detailData = product.relationships.detail.data;
    product.relationships.detail.data = isArray(detailData) ? detailData[0] : detailData;

    return product;
  }
});
