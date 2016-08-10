/* globals opr */

import Ember from 'ember';

const { capitalize } = Ember.String;

export default Ember.Service.extend({

  browserList: ['chrome', 'edge', 'explorer', 'firefox', 'opera', 'safari'],

  browserName: Ember.computed('browserList', 'isChrome', 'isEdge', 'isExplorer', 'isFirefox', 'isOpera', 'isSafari', function() {
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

  isBlink: false,
  isChrome: false,
  isEdge: false,
  isExplorer: false,
  isFirefox: false,
  isOpera: false,
  isSafari: false,

  init() {
    this._super(...arguments);
    this.getBrowserInfo();
  },

  getBrowserInfo: function() {

    // from: http://stackoverflow.com/a/9851769/5187080

    // ------------------
    //  Current Browsers
    // ------------------

    // Blink engine detection
    // Chrome 1+
    // Edge 20+
    // Internet Explorer 6-11
    // Firefox 1.0+
    // Opera 8.0+
    // At least Safari 3+: "[object HTMLElementConstructor]"

    var isOpera = !!window.opera;
    isOpera = isOpera || ( !!window.opr && !!opr.addons );
    isOpera = isOpera || ( navigator.userAgent.indexOf(' OPR/') >= 0 );

    var isChrome = ( !!window.chrome && !!window.chrome.webstore ),
        isExplorer = ( /*@cc_on!@*/false || !!document.documentMode ),
        isFirefox = ( typeof InstallTrigger !== 'undefined' ),
        isSafari = ( Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 );

    var isBlink = ( isChrome || isOpera ) && !!window.CSS,
        isEdge = ( !isExplorer && !!window.StyleMedia );

    this.setProperties({
      isBlink: isBlink,
      isChrome: isChrome,
      isEdge: isEdge,
      isExplorer: isExplorer,
      isFirefox: isFirefox,
      isOpera: isOpera,
      isSafari: isSafari
    });

  },

  checkBrowserFor: function(browserTag) {
    var browserAgent = navigator.userAgent,
        hasBrowserTag = ( browserAgent.indexOf(browserTag) > -1 );

    return hasBrowserTag;
  }

});
