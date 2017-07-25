import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;
const { attr } = DS;

export default DS.Model.extend({
  email: attr('string'),

  isValidEmail: computed.match('email', /^.+@.+\..+$/),
  isDisabled: computed.not('isValid'),
});
