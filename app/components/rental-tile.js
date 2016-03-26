import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if(confirm("delete rental?")) {
        this.sendAction('destroyRental', rental);
      }
    },
    updateRental(rental, params) {
      this.sendAction('updateRental', rental, params);
    }
  }
});
