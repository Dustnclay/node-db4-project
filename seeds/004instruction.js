
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instruction').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruction').insert([
        {step_number:1, step:"add water", recipe_id:1},
        {step_number:2, step:"leave overnight", recipe_id:1},
        {step_number:1, step:"mix ingredients", recipe_id:2},
        {step_number:2, step:"bake for 30 min", recipe_id:2},
        {step_number:3, step:"cool for 10 minutes", recipe_id:2},
        {step_number:4, step:"preheat oven", recipe_id:2},
        {step_number:1, step:"open box", recipe_id:1}
      ]);
    });
};
