[![Ember Observer Score](http://emberobserver.com/badges/ember-browser-checker.svg)](http://emberobserver.com/addons/ember-browser-checker)

### Ember-browser-checker

-------------

Check what browser is being used with ease. For example:

+ Print a special message for safari:

```
{{#if (is-safari)}}
  I'm on a safari!
{{/if}}
```

+ Get the name of the user's brower:

```
You are on {{browser-name}}.
```

+ Inject the `browser-checker` service and use everywhere else

```
this.get('browserChecker').get('isSafari')
```
