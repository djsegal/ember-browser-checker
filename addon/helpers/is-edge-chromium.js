import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class IsEdgeChromium extends Helper {
  @service('browser-checker') browserChecker;

  compute() {
    return this.browserChecker.isEdgeChromium;
  }
}
