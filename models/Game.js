const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String, 
    required: true
    
  },
  playerCount: {
    type: Map, 
    of: Number
  },
  category: {
    type: Array, 
    required: true,
    validate: [arrayMin, 'Must select at least one category']
  },
  gameType: {
    type: Array,
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
  }
})

function arrayMin(val) {
  return val.length >= 1;
}

gameSchema.index({ name: 1, userCreator: 1 }, { unique: true })

module.exports = Game = mongoose.model('Game', gameSchema)