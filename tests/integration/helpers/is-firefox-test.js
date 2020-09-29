import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | is-firefox', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects firefox', async function (assert) {
    assert.expect(1);

     // pretend we are firefox
     window.InstallTrigger = true;

    await render(hbs`{{is-firefox}}`);

    assert.equal(this.element.textContent.trim(), "true");
  });
});
