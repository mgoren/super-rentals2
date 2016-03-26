import Ember from 'ember';

export default Ember.Component.extend({
  updateCityFormShowing: false,
  actions: {
    showForm() {
      this.set('updateCityFormShowing', true);
    },
    update(city) {
      var params = {
        name: this.get('name'),
        attraction: this.get('attraction'),
        country: this.get('country')
      };
      this.set('updateCityFormShowing', false);
      this.sendAction('updateCity', city, params);

    }
  }
});
