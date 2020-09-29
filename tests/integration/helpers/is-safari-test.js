import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import window from 'ember-window-mock';

module('Integration | Helper | is-safari', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects safari', async function (assert) {
    assert.expect(1);

    // pretend we are Safari
    window.ApplePaySession = true;

    await render(hbs`{{is-safari}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
