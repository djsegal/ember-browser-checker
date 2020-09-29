import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import window from 'ember-window-mock';

module('Integration | Helper | browser-name', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    // pretend we are on chrome
    window.chrome = {};
    window.chrome.runtime = true;

    await render(hbs`{{browser-name}}`);
    assert.equal(this.element.textContent.trim(), 'chrome');
  });
});
