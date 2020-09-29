import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import window from 'ember-window-mock';

module('Integration | Helper | isChrome', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects chrome', async function (assert) {
    assert.expect(1);

    // pretend we are chrome
    window.chrome = {};
    window.chrome.runtime = true;

    await render(hbs`{{is-chrome}}`);
    assert.equal(this.element.textContent.trim(), "true");
  });
});
