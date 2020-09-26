
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
    })
    .createTable('instruction', tbl => {
        tbl.integer('step_number').notNullable()
        tbl.string('step').notNullable()
        tbl.integer('recipe_id').notNullable()
    })
    .createTable('recipe-instruction', tbl => {
        tbl.integer('recipe_id').notNullable()
        tbl.string('ingredient_id').notNullable()
    })
};

exports.down = function(knex) {
  return knex.scheme
  .dropTableIfExists('recipe-ingredient')
  .dropTableIfExists('instruction')
  .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe')
};
