import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;
const { attr } = DS;

export default DS.Model.extend({
  contactEmail: attr('string'),
  contactMessage: attr('string'),

  isValidEmail: computed.match('contactEmail', /^.+@.+\..+$/),
  messageLength: computed.gte('contactMessage.length', 5),

  notEmptyMessage: computed.notEmpty('contactMessage'),
  isValidMessage: computed.and('messageLength', 'notEmptyMessage'),

  isValidProperties: computed.and('isValidEmail', 'isValidMessage'),

  isDisabled: computed.not('isValidProperties'),
});
