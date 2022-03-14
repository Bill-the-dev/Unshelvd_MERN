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
  },
  playerCount: {
    type: Map, // figure out how to get min and max player count
    of: Integer
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = Game = mongoose.model('Game', GameSchema)