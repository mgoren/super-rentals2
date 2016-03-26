import Ember from 'ember';

export default Ember.Component.extend({
  newCityFormShowing: false,
  actions: {
    showForm() {
      this.set('newCityFormShowing', true);
    },
    save() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        attraction: this.get('attraction') ? this.get('attraction') : "",
        country: this.get('country') ? this.get('country') : ""
      };
      this.set('newCityFormShowing', false);
      this.sendAction('saveCity', params);
    }
  }
});
