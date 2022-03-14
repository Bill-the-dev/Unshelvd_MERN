const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String, //is string correct type? reading url for AWS
    required: true
    // add default to generic image path
  },
  playerCount: {
    type: Map, // figure out how to get min and max player count
    of: Number
  },
  category: {
    type: Array, // this can be multiselect stored as an array
    required: true
  },
  gameType: {
    type: Array, // this can be multiselect stored as an array
    required: true
  },
  description: {
    type: String
  },
  rulesLink: {
    type: String
  },
  userCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = Game = mongoose.model('Game', GameSchema)