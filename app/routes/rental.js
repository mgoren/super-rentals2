import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('rental', params.rental_id);
  },
  actions: {
    destroyRental(rental) {
      var city = rental.get('city')
      rental.destroyRecord();
      this.transitionTo('city', city);
    },
    updateRental(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('city', params.city);
    }
  }
});
