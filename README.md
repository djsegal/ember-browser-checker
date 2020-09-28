[![Ember Observer Score](http://emberobserver.com/badges/ember-browser-checker.svg)](http://emberobserver.com/addons/ember-browser-checker)

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
browserChecker: Ember.inject.service();
...
this.get('browserChecker').get('isChrome')
```

Browsers detected
------------------------------------------------------------------------------

Name     | Helper
---------|-----------
Blink    | `is-blink`
Chrome   | `is-chrome`
Edge     | `is-edge`
Explorer | `is-explorer`
Firefox  | `is-firefox`
Opera    | `is-opera`
Safari   | `is-safari`

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
