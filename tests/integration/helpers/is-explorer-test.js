import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | is-explorer', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects IE', async function (assert) {
    assert.expect(1);

    // pretend we are explorer
    document.documentMode = true;

    await render(hbs`{{is-explorer}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });
});
