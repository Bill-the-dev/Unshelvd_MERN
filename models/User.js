const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// relations to objects group, games (library)

module.exports = User = mongoose.model('User', UserSchema);

// USERS
games: [
  ObjectId("4a1h3m42a5b9d4i9dc405l721"),
  ObjectId("b9x2m45a5b7h7e3ml403a091"),
  ObjectId("1k3b5f87x5s6c7i2mp814g524")
],
groups: [
  ObjectId("4a1h3m42a5b9d4i9dc405l721"),
  ObjectId("b9x2m45a5b7h7e3ml403a091"),
  ObjectId("1k3b5f87x5s6c7i2mp814g524")
]

// GAMES
{
  gamename: 'dfsdf',
  user_creator: ObjectId('user') //default name for seeded games
}
  // user can delete reference to game in their library but the game object in the game table will still exist
  // removing from library can happen regardless of who created the game
  // GAME CRUD: only create and read (come back to update)

// GROUPS
{
  groupname: 'group',
  group_join_key: 'random string'
  users: [
    ObjectId('sdfjshdkfshdf'),
    ObjectId('dsfksjhdkfshjdf')
  ] 
}