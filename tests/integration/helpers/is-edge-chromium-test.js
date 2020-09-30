import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import window from 'ember-window-mock';

module('Integration | Helper | is-edge-chromium', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects edge chromium', async function (assert) {
    assert.expect(1);

    // https://stackoverflow.com/questions/1307013/mocking-a-useragent-in-javascript
    navigator.__defineGetter__('userAgent', function () {
      return 'Edg'; // customized user agent
    });

    // pretend we are Edge chromium
    window.chrome = {};
    window.chrome.runtime = true;

    await render(hbs`{{is-edge-chromium}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
