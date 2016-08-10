import Ember from 'ember';

export default Ember.Helper.extend({
  browserChecker: Ember.inject.service(),

  compute() {
    let browserChecker = this.get('browserChecker');
    return browserChecker.get('isBlink');
  }
});
