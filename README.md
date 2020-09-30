[![Ember Observer Score](https://emberobserver.com/badges/ember-browser-checker.svg)](https://emberobserver.com/addons/ember-browser-checker)

ember-browser-checker
==============================================================================

Browser detector using browser features, not `navigator.userAgent`


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-browser-checker
```


Usage
------------------------------------------------------------------------------

Check what browser is being used with ease. For example:

+ Print a special message for safari:

```
{{#if (is-safari)}}
  I'm on a safari!
{{/if}}
```

+ Get the name of the user's browser:

```
You are on {{browser-name}}.
```

+ Inject the `browserChecker` service and use everywhere else

```js
import { inject as service } from '@ember/service';

...
@service browserChecker;

this.browserChecker.isBlink
this.browserChecker.isChrome
this.browserChecker.isEdge
this.browserChecker.isEdgeChromium
this.browserChecker.isExplorer
this.browserChecker.isFirefox
this.browserChecker.isOpera
this.browserChecker.isSafari
```

Browsers detected
------------------------------------------------------------------------------

Browser      | Helper             | {{browser-name}} | Detects
-------------|--------------------|------------------|--------
Blink        | `is-blink`         | n/a <sup>*</sup> |
Chrome       | `is-chrome`        | `chrome`         | 1.0+
Edge         | `is-edge`          | `edge`           | 20+
EdgeChromium | `is-edge-chromium` | `edgeChromium`   | all
Explorer     | `is-explorer`      | `explorer`       | 6-11
Firefox      | `is-firefox`       | `firefox`        | 1.0+
Opera        | `is-opera`         | `opera`          | 8.0+
Safari       | `is-safari`        | `safari`         | 3.0+

<sup>*</sup> Blink is the rendering engine used by multiple browsers (Chrome, Microsoft Edge (chromium), Opera) so `blink` is not returned by the helper

Template linting errors
------------------------------------------------------------------------------

In Ember Octane (v3.15+), non-builtin helpers will generate linting errors for the following rules: `no-curly-component-invocation` and `no-implict-this`.

To disable these errors, you need to allow the helpers in the `.template-lintrc.js` file located in the project root. Example entries for the browser helpers is below:

```js
'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': {
      allow: [
        'browser-name',
        'is-blink',
        ...
      ]
    },
    'no-implicit-this': {
      allow: [
        'browser-name',
        'is-blink',
        ...
      ]
    }
  }
};
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
