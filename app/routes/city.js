import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('city', params.city_id);
  },
  actions: {
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    },
    updateCity(city, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          city.set(key,params[key]);
        }
      });
      city.save();
      this.transitionTo('city', city);
    },
    saveRental(params) {
      var newRental = this.store.createRecord('rental', params);
      var city = params.city;
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', city);
    },
    destroyRental(rental) {
      var city = rental.get('city');
      rental.destroyRecord();
      this.transitionTo('city', city);
    },
    updateRental(rental, params) {
      var city = rental.get('city');
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('city', city);
    }


  }
});
