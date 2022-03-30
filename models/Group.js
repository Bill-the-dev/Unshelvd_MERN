const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  shareCode: {
    type: String, 
    required: true  
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  userGroupCreator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
})

module.exports = Group = mongoose.model('Group', GroupSchema);