import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  text() { return faker.lorem.paragraphs(3); },
  color() { return faker.commerce.color(); }

});
