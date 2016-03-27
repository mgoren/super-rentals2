import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalFormShowing: false,
  actions: {
    showForm() {
      this.set('updateRentalFormShowing', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        city: this.get('city')
      };
      this.set('updateRentalFormShowing', false);
      this.sendAction('updateRental', rental, params);
    }
  }
});
