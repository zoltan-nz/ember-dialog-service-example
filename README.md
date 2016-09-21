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

```
$ ember install ember-cli-mirage
$ ember install ember-cli-sass && ember install ember-cli-bootstrap-sassy && echo '@import "bootstrap";' > ./app/styles/app.scss && rm ./app/styles/app.css
$ ember g template application
$ ember g route index
$ ember g route product
$ ember g route product/sales
$ ember g route product/details
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

$ ember install ember-moment
```
