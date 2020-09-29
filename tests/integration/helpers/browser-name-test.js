import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | browser-name', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const browser = (this.owner.lookup('service:browser-checker')).browserName();

    await render(hbs`{{browser-name}}`);
    assert.equal(this.element.textContent.trim(), browser);
  });
});
