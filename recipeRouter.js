const express = require('express')
const db = require('./data/db-model')

const router = express.Router();

router.get('/',(req,res) => {
    db.getRecipes()
        .then(recipes =>
            res.status(200).send(recipes))
        .catch(err =>
            res.status(400).send(err)
        )
})

router.get('/:id',(req,res) => {
    const {id} = req.params
    db.getShoppingList(id)
        .then(recipes =>
            res.status(200).send(recipes))
        .catch(err =>
            res.status(400).send(err)
        )
})

router.get('/instructions/:id',(req,res) => {
    const {id} = req.params
    db.getInstruction(id)
        .then(inst =>
            res.status(200).send(inst))
        .catch(err =>
            res.status(400).send(err)
        )
})



module.exports = router