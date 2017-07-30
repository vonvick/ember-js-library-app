import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  actions: {
    editLibrary(library) {
      library.save().then(() => this.transitionTo('admin.libraries') )
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm('Your changes has not been saved yet, would you like to leave this form?');

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
