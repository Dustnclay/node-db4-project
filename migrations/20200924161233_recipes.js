
exports.up = function(knex) {
    return knex.schema
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('name',128).notNullable()
    } )
    .createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable()
        tbl.float('quantity').notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe.id')
    })
    .createTable('instructions', tbl => {
        tbl.integer('instruction_number').notNullable()
        tbl.string('instruction').notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe.id')

    })
};

exports.down = function(knex) {
  return knex.scheme
  .dropTableIfExists('instruction')
  .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe')
};
