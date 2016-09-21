import { Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({

  date() { return faker.date.past(); },
  amount() { return faker.random.number(10); }

});
