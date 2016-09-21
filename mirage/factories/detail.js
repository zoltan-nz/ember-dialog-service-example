import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  text: faker.lorem.paragraphs(3),
  color: faker.commerce.color()

});
