import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import window from 'ember-window-mock';

module('Unit | Service | browser-checker', function (hooks) {
  setupTest(hooks);

  // clean up the window proxy
  hooks.beforeEach(function () {
    // chrome
    delete window.chrome.runtime;

    // Edge
    window.StyleMedia = false;

    // Safari
    window.ApplePaySession = false;

    // Firefox
    delete window.InstallTrigger;

    // Explorer
    delete document.documentMode;

    // pretend we are Opera
    delete window.opr.addons;

    navigator.__defineGetter__('userAgent', function () {
      return []; // customized user agent
    });
  });

  test('it returns a browser name - edgeChromium', function (assert) {
    assert.expect(1);

    // https://stackoverflow.com/questions/1307013/mocking-a-useragent-in-javascript
    navigator.__defineGetter__('userAgent', function () {
      return 'Edg'; // customized user agent
    });

    // pretend we are Edge chromium
    window.chrome = { runtime: true };

    const service = this.owner.lookup('service:browser-checker');
    const name = service.browserName();
    assert.equal(name, 'edgeChromium', 'A browser name was returned');
  });

  test('it returns a browser name - chrome', function (assert) {
    assert.expect(1);

    // pretend we are Edge chromium
    window.chrome = { runtime: true };

    const service = this.owner.lookup('service:browser-checker');
    const name = service.browserName();

    assert.equal(name, 'chrome', 'A browser name was returned');
  });

  test('it returns a browser name - edge', function (assert) {
    assert.expect(1);

    // pretend we are Edge
    window.StyleMedia = true;

    const service = this.owner.lookup('service:browser-checker');
    const name = service.browserName();

    assert.equal(name, 'edge', 'A browser name was returned');
  });

  test('it returns a browser name - explorer', function (assert) {
    assert.expect(1);

    // pretend we are explorer
    document.documentMode = true;

    const service = this.owner.lookup('service:browser-checker');
    const name = service.browserName();

    assert.equal(name, 'explorer', 'A browser name was returned');
  });

  test('it returns a browser name - firefox', function (assert) {
    assert.expect(1);

    // pretend we are firefox
    window.InstallTrigger = true;

    const service = this.owner.lookup('service:browser-checker');
    const name = service.browserName();

    assert.equal(name, 'firefox', 'A browser name was returned');
  });

  test('it returns a browser name - opera', function (assert) {
    assert.expect(1);

    // pretend we are Opera
    window.opr = { addons: true };

    const service = this.owner.lookup('service:browser-checker');
    const name = service.browserName();

    assert.equal(name, 'opera', 'A browser name was returned');
  });

  test('it returns a browser name - safari', function (assert) {
    assert.expect(1);

    // pretend we are Safari
    window.ApplePaySession = true;

    const service = this.owner.lookup('service:browser-checker');
    const name = service.browserName();

    assert.equal(name, 'safari', 'A browser name was returned');
  });
});
