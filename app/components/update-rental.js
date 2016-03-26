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
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentalFormShowing', false);
      this.sendAction('updateRental', rental, params);
    }
  }
});
