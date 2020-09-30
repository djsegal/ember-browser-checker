import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import window from 'ember-window-mock';

module('Integration | Helper | is-opera', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects opera', async function (assert) {
    assert.expect(1);

    // pretend we are Opera
    window.opr = {};
    window.opr.addons = true;

    await render(hbs`{{is-opera}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
