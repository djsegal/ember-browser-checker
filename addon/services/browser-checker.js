import Ember from 'ember';

export default Ember.Service.extend({

  isChrome: false,
  isExplorer: false,
  isFirefox: false,
  isSafari: false,
  isOpera: false,

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
