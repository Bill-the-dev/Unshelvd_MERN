const express = require("express");
const router = express.Router();
const Game = require('../../models/Game')
const passport = require('passport');
const { request } = require("express");


const validateGameInput = require('../../validation/games')

// router.get("/test", (req, res) => res.json({ msg: "This is the tweets route" }));

// ALL GAMES
router.get('/', (req,res) => {
    Game.find()
    .sort({name: 1})
    .then(games => res.json(games))
    .catch(err => res.status(404).json({nogamesfound: 'no games found'}))
})

// SINGLE GAME
router.get('/:id', (req,res) => {
    Games.findById(req.params.id)
        .then(game => res.json(game))
        .catch(err => res.status(404).json({nogamesfound: 'no game found with id'}))
})

// CREATE GAME
router.post('/', passport.authenticate('jwt', {session: false}), (req,res) => {
    const {errors, isValid} = validateGameInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }
    
    const categoryValues = req.body.category.split(", ")
    const gameTypeValues = req.body.gameType.split(", ")

    const newGame = new Game({
        name: req.body.name,
        image: req.body.image,
        playerCount: {
            min: req.body.min,
            max: req.body.max
        },
        category: categoryValues,
        gameType: gameTypeValues,
        description: req.body.description,
        rulesLink: req.body.rulesLink,
        userCreator: req.user.id
    })

    newGame.save()
        .then(game => res.json(game))
})


module.exports = router;