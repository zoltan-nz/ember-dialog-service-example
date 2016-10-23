import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('instant-help-confirm', 'Integration | Component | instant help confirm', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{instant-help-confirm}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#instant-help-confirm}}
      template block text
    {{/instant-help-confirm}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
