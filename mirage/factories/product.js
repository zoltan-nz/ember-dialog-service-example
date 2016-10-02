import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Sample Product ${i}`;
  },

  type: faker.random.number(3),

  isFood() {return this.type === 1; },
  isClothes() { return this.type === 2; },
  isFurniture() { return this.type === 3; },

  price: faker.random.number(500),

  afterCreate(product, server) {
    server.createList('sale', 10, { product });
    server.createList('detail', 1, { product });
  }


});
