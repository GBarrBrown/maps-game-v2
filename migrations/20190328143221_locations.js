
exports.up = function(knex, Promise) {
    return knex.schema.createTable('locations', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('latLong')
        table.integer('zoom')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('locations')
};
