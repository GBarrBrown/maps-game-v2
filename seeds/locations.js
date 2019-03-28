
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, name: 'London City', latLong: '51.514559, -0.091235', zoom: 3},
        {id: 2, name: 'Pyramids of Giza', latLong: '29.977988, 31.132899', zoom: 3},
        {id: 3, name: 'Mt Everest', latLong: '27.991820, 86.925479', zoom: 3},
        {id: 4, name: 'Niagara Falls', latLong: '43.083004, -79.074163', zoom: 3},
        {id: 5, name: 'Wellington City', latLong: '-41.293068, 174.777051', zoom: 3},
        {id: 6, name: 'New York City', latLong: '40.716857, -74.004225', zoom: 3}
      ]);
    });
};
