import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import window from 'ember-window-mock';

module('Integration | Helper | isEdge', function (hooks) {
  setupRenderingTest(hooks);

  test('it detects edge', async function (assert) {
    assert.expect(1);

     // pretend we are Edge
     window.StyleMedia = true;
     
    await render(hbs`{{is-edge}}`);

    assert.equal(this.element.textContent.trim(), "true");
  });
});
