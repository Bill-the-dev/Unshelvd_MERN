const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const { db } = require("../../models/User");

// GET CURRENT USER
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send(req.user)
})

// ALL USERS
router.get('/', (req, res) => {
  User.find()
    .sort({ name: 1 })
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'no users found' }));
})

// USER SHOW PAGE
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(404).json({nouserfound: 'no user found with id'}))
})

// USER SHOW GAMES (LIBRARY)
router.get('/:id/games', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user.games))
    .catch(err => res.status(404).json({ nouserfound: 'no user found with id' }));
})


// USER CREATE
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {

    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "User already exists";
      return res.status(400).json(errors);
    } else {
  
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        games: ['62346dc0e58d7eaa4865974a','62346dc0e58d7eaa48659758','62346dc0e58d7eaa48659746','623b8ac3a5a2e640e0c131a4','623b8aa5a5a2e640e0c131a3','623b8c35a5a2e640e0c131a5','623b90f8a5a2e640e0c131a6']
      });

      
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
          
              const payload = { id: user.id, username: user.username };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });

            })
            .catch(err => res.json(err))
        });
      });

    }
  });
});


// USER LOGIN
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then(user => {
    if (!user) {
      errors.username = "This user does not exist";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, username: user.username, email: user.email };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});


router.patch('/:id', (req,res) => {
  const userID = req.body.user._id;
  const updatedUser = req.body.user 

  User.findByIdAndUpdate(userID, {games: updatedUser.games, groups: updatedUser.groups})
    .then(user => res.json(user))
    .catch(err => console.log({err}))
})

module.exports = router;

