// post / new group
// get /:id show group
// delete /:id
// patch /:id

const express = require("express");
const router = express.Router();
const Group = require('../../models/Group')
const passport = require('passport');

const validateGroupInput = require('../../validation/groups')

// SINGLE GROUP
router.get('/:id', (req,res) => {
  Group.findById(req.params.id)
      .then(group => res.json(group))
      .catch(err => res.status(404).json({nogroupsfound: 'no group found with id'}))
})

// ALL GROUPS
router.get('/', (req, res) => {
  Group.find()
    .sort({ name: 1 })
    .then(groups => res.json(groups))
    .catch(err => res.status(404).json({ nogroupsfound: 'no groups found' }));
})


// GREAT NEW GROUP
router.post('/', passport.authenticate('jwt', {session: false}), (req,res) => {
  const {errors, isValid} = validateGroupInput(req.body);

  if (!isValid) {
      return res.status(400).json(errors)
  }

  const generateRandomNumber = () => {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }

  const shareCode = generateRandomNumber()

  const newGroup = new Group({
      name: req.body.name,
      shareCode: shareCode,
      users: [req.user.id],
      userGroupCreator: req.user.id
  })

  newGroup.save()
      .then(game => res.json(game))
      .catch(err => res.json(err))
})

// DELETE GROUP
router.delete('/:id', (req,res) => {
  Group.deleteOne( { _id : req.params.id } )
    .then(() => res.status(200).json({msg: 'success'}))
    .catch(err => res.json(err))
})

// UPDATE GORUP
router.patch('/:id', (req,res) => {
  const groupId = req.body.group._id;
  const updatedGroup = req.body.group;

  Group.findById(groupId)
    .catch(err => res.json(err))
  console.log({group: req.body.group.users})
  Group.findByIdAndUpdate(groupId, {users: updatedGroup.users})
    .then(group => res.json(group))
    // .then(res => console.log({res}))
    .catch(err => console.log({err}))
})


module.exports = router
