'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': {
      allow: [
        'browser-name',
        'is-blink',
        'is-chrome',
        'is-edge-chromium',
        'is-edge',
        'is-explorer',
        'is-firefox',
        'is-opera',
        'is-safari'
      ]
    },
    'no-implicit-this': {
      allow: [
        'browser-name',
        'is-blink',
        'is-chrome',
        'is-edge-chromium',
        'is-edge',
        'is-explorer',
        'is-firefox',
        'is-opera',
        'is-safari'
      ]
    }
  }
};
