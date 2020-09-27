const db = require('./knexConfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstruction
}

function getRecipes () {
    return db('recipe')
}

function getShoppingList (id) {
    return db('recipe')
        .join('ingredient', 'recipe.id', 'ingredient.recipe_id')
        .select('ingredient.quantity', 'ingredient.name', )
        .where({recipe_id:id})
}

function getInstruction (id) {
    return db('recipe')
        .join('instructions','recipe.id','instructions.recipe_id', )
        .select('instructions.instruction_number','instructions.instruction')
        .where({recipe_id:id})
}