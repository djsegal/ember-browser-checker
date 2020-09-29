import Service from '@ember/service';
import { capitalize } from '@ember/string';

export default class BrowserCheckerService extends Service {
  isBlink = false;
  isChrome = false;
  isEdge = false;
  isEdgeChromium = false;
  isExplorer = false;
  isFirefox = false;
  isOpera = false;
  isSafari = false;

  // prettier-ignore
  browserList = [ 'chrome', 'edge', 'explorer', 'edgeChromiun', 'firefox', 'opera', 'safari'];

  constructor() {
    super(...arguments);
    this.getBrowserInfo();
  }

  browserName() {
    const list = this.browserList;
    let curBrowser, isBrowser;

    for (var i = 0; i < list.length; i++) {
      curBrowser = list[i];
      isBrowser = `is${capitalize(curBrowser)}`;
      if (this.get(isBrowser)) return curBrowser;
    }
    return null;
  }

  getBrowserInfo() {
    // original detection logic
    // from: http://stackoverflow.com/a/9851769/5187080

    // additional checks
    // https://dev.to/_elmahdim/safe-reliable-browser-sniffing-39bp

    // ---------------------------
    //  Current Browsers detected
    // ---------------------------

    // Blink engine detection
    // Chrome 1+
    // Edge 20+
    // EdgeChromium
    // Internet Explorer 6-11
    // Firefox 1.0+
    // Opera 8.0+
    // At least Safari 3+: "[object HTMLElementConstructor]"

    // Chrome
    this.isChrome = !!window.chrome && !!window.chrome.webstore; // 1 - 79 deprecated 2018
    this.isChrome =
      this.isChrome || (!!window.chrome && !!window.chrome.runtime); // 80+

    // Blink engines
    this.isBlink = (this.isChrome || this.isOpera) && !!window.CSS;

    // IE 8 - 11
    this.isExplorer = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    this.isEdge = !this.isExplorer && !!window.StyleMedia;

    // Edge (based on chromium) detection
    this.isEdgeChromium =
      this.isChrome && navigator.userAgent.indexOf('Edg') != -1;

    // Firefox / Gecko browsers
    this.isFirefox = typeof InstallTrigger !== 'undefined';

    // Opera
    this.isOpera = !!window.opera; // opera 8+
    // eslint-disable-next-line no-undef
    this.isOpera = this.isOpera || (!!window.opr && !!opr.addons); // opera 20+ evergreen
    this.isOpera = this.isOpera || navigator.userAgent.indexOf(' OPR/') >= 0; // least reliable

    // Safari
    this.isSafari = /constructor/i.test(window.HTMLElement); // 3+
    this.isSafari = this.isSafari || !!window.ApplePaySession; // 11.1+ ios 11.3+
    this.isSafari =
      this.isSafari ||
      (function (p) {
        // 7.1+
        return p.toString() === '[object SafariRemoteNotification]';
      })(
        !window['safari'] ||
          // eslint-disable-next-line no-undef
          (typeof safari !== 'undefined' && safari.pushNotification)
      );
  }
}
