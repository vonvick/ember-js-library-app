import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    saveContact(newContact) {
      newContact.save()
        .then(() => this.controller.set('responseMessage', true))
        .catch((error) => {
          return `${console.log(error.errors)}`;
        });
    }
  }
});
