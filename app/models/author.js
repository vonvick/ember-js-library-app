import DS from 'ember-data';
import Ember from 'ember';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),

  book: DS.hasMany('book', { inverse: 'author', async: true }),

  notEmpty: Ember.computed.notEmpty('name'),

  randomize() {
    this.set('name', Faker.name.findName());
    return this;
  },
});