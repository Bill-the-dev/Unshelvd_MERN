const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    // index: true
  },
  shareCode: {
    type: String, // random generate 
    required: true  
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  userGroupCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // index: true
  }
})

module.exports = Group = mongoose.model('Group', GroupSchema);