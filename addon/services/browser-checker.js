import Ember from 'ember';

const { capitalize } = Ember.String;

export default Ember.Service.extend({

  browserList: ['chrome', 'explorer', 'firefox', 'opera', 'safari'],

  browserName: Ember.computed('browserList', 'isChrome', 'isExplorer', 'isFirefox', 'isSafari', 'isOpera', function() {
    var browserList = this.get('browserList');
    if ( !browserList ) { return; }

    var arrayLength = browserList.length,
        curBrowser, isBrowser;

    for (var i = 0; i < arrayLength; i++) {
      curBrowser = browserList[i];
      isBrowser = 'is' + capitalize(curBrowser);
      if ( this.get(isBrowser) ) { return curBrowser; }
    }
  }),

  isChrome: false,
  isExplorer: false,
  isFirefox: false,
  isOpera: false,
  isSafari: false,

  init() {
    this._super(...arguments);

    var isExplorer = this.checkBrowserFor('MSIE'),
        isFirefox = this.checkBrowserFor('Firefox');

    if ( isExplorer || isFirefox ) {
      this.setProperties({
        isExplorer: isExplorer,
        isFirefox: isFirefox
      });
      return;
    }

    var isChrome = this.checkBrowserFor('Chrome'),
        isSafari = this.checkBrowserFor('Safari');
    if ( isChrome && isSafari ) { isSafari = false; }

    var browserAgent = navigator.userAgent,
        isOpera = browserAgent.toLowerCase().indexOf("op") > -1;
    if ( isChrome && isOpera ) { isChrome = false; }

      this.setProperties({
        isChrome: isChrome,
        isSafari: isSafari,
        isOpera: isOpera
      });
  },

  checkBrowserFor: function(browserTag) {
    var browserAgent = navigator.userAgent,
        hasBrowserTag = ( browserAgent.indexOf(browserTag) > -1 );

    return hasBrowserTag;
  }

});
