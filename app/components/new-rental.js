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
        type: this.get('type') ? this.get('type') : "",
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') : "",
        city: this.get('city')
      };
      this.set('newRentalFormShowing', false);
      this.sendAction('saveRental', params);
    }
  }
});
