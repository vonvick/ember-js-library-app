import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('invitation');
  },
  model() {
    return this.store.createRecord('invitation');
  }
});
