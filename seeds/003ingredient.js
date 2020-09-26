
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {recipe_id:1, name:'cup of sugar', quantity:2},
        {recipe_id:1, name:'cup salt', quantity:2},
        {recipe_id:2, name:'cup flour', quantity:1},
        {recipe_id:2, name:'eggs', quantity:2},
        {recipe_id:2, name:'cup of sugar', quantity:1},
        {recipe_id:3, name:'brownie box', quantity:1},
      ]);
    });
};
