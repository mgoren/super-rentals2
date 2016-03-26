import Ember from 'ember';

export default Ember.Component.extend({
  newRentalFormShowing: false,
  actions: {
    showForm() {
      this.set('newRentalFormShowing', true);
    },
    save() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city') ? this.get('city') : "",
        type: this.get('type') ? this.get('type') : "",
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') : ""
      };
      this.set('newRentalFormShowing', false);
      this.sendAction('saveRental', params);
    }
  }
});
