import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { attr } = DS;

export default DS.Model.extend({
  email: attr('string'),

  isValidEmail: computed.match('email', /^.+@.+\..+$/),
  isDisabled: computed.not('isValidEmail'),

});
