const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    // index: true
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
    required: true,
    validate: [arrayMin, 'Must select at least one category']
  },
  gameType: {
    type: Array, // this can be multiselect stored as an array
    required: true,
    validate: [arrayMin, 'Must select Setting']

  },
  description: {
    type: String
  },
  rulesLink: {
    type: String
  },
  userCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // index: true
  }
})

function arrayMin(val) {
  return val.length >= 1;
}

gameSchema.index({ name: 1, userCreator: 1 }, { unique: true })

module.exports = Game = mongoose.model('Game', gameSchema)