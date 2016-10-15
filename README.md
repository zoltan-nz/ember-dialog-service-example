# Footnote App

## Installation

* `git clone <repository-url>` this repository
* `cd footnote-app`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

# Implementation Log

Basic app with mirage, bootstrap.
```
$ ember install ember-cli-mirage
$ ember install ember-cli-sass && ember install ember-cli-bootstrap-sassy && echo '@import "bootstrap";' > ./app/styles/app.scss && rm ./app/styles/app.css
$ ember g template application
```

Generate routes: `index`, `product`, `product/sales`, `product/details`
```
$ ember g route index
$ ember g route product
$ ember g route product/sales
$ ember g route product/details
```

Generate models: `Product`, `Sale` and `Detail`.
```
$ ember g model product name:string isFood:boolean isClothes:boolean isFurniture:boolean price:number sales:hasMany detail:belongsTo
$ ember g model sale date:date amount:number product:belongsTo
$ ember g model detail text:string color:string product:belongsTo
$ ember g mirage-model product
$ ember g mirage-model sale
$ ember g mirage-model detail
$ ember g mirage-factory product
$ ember g mirage-factory sale
$ ember g mirage-factory detail
$ ember g adapter application
```

Add moment.js to the project
```
$ ember install ember-moment
```

Add ember-bootstrap-nav-link to the project, fix bootstrap active state.
```
$ ember install ember-bootstrap-nav-link
```

Ember Mirage can manage hasMany to hasMany models only at the moment. So we have to convert in the serializer the hasMany relationship to simple belongsTo, to a simple object, instead of Array.

Code after first iteration: 
```
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
```

Code after refactoring:
```
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
```

# Experimenting with nested routes and modals

$ ember g route modal-dialog

Add named outlet to applicaiton.hbs

