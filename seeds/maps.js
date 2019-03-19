
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('maps').del()
    .then(function () {
      // Inserts seed entries
      return knex('maps').insert([
        {id: 1, name: 'Paris', lat: 1, lng: 2, zoom: 5},
        {id: 2, name: 'Dubai', lat: 1, lng: 2, zoom: 5},
        {id: 3, name: 'New York City', lat: 1, lng: 2, zoom: 5},
        {id: 4, name: 'Istanbul', lat: 1, lng: 2, zoom: 5},
        {id: 5, name: 'Kuala Lumpa', lat: 1, lng: 2, zoom: 5},
        {id: 6, name: 'Tokyo', lat: 1, lng: 2, zoom: 5},
        {id: 7, name: 'Seoul', lat: 1, lng: 2, zoom: 5}
      ]);
    });
};
