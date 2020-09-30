import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import window from 'ember-window-mock';

module('Integration | Helper | is-blink', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects blink', async function (assert) {
    assert.expect(1);

    // chrome uses blink engine
    // pretend we are chrome
    window.chrome = {};
    window.chrome.runtime = true;

    // blink specific
    window.CSS = true;

    await render(hbs`{{is-blink}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
