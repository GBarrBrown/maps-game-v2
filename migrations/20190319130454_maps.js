
exports.up = function(knex, Promise) {
    return knex.schema.createTable('maps', table => {
        table.increments('id').primary()
        table.string('name')
        table.integer('lat')
        table.integer('lng')
        table.integer('zoom')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('maps')
};
