const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const { schema } = require('./models/Game');
const User = require('./models/User');
const Group = require('./models/Group');
const Game = require('./models/Game');


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .then(() => loadCounter())
  .catch(err => console.log(err));

// const seedUsers = [
//   {
//     username: '',
//     email: '',
//     password: '',
//     games: [{
//       // type: Schema.Types.ObjectId,
//       // ref: 'Game'
//     }],
//     groups: [{
//       // Schema.Types.ObjectId,
//       // ref: 'Group'
//     }],
//   },
// ] 


// LOAD LOGIC

const loadCounter = () => {
  let gamesDone = 0;
  for (let i = 0; i < gamesTest.length; i++) {
    // debugger
    gamesTest[i].save((err, res) => {
      console.log(`errors = ${err} res = ${res} `);
      console.log(`i = ${i} game = ${gamesTest[i]} `);
      gamesDone++;
      if (gamesDone === gamesTest.length) {
        // debugger
        console.log(`${i}`);
        exit();
      }
      // debugger
    });
  }

  // should add documents, then disconnect once finished (callback below)

};
const exit = () => {
  mongoose.disconnect()
    .then(() => console.log('Disonnected from MongoDB successfully'));
};



// FORMAT

// const seedUsers = [
//   {
//     username: '',
//     email: '',
//     password: '',
//     games: [{
//       // type: Schema.Types.ObjectId,
//       // ref: 'Game'
//     }],
//     groups: [{
//       // Schema.Types.ObjectId,
//       // ref: 'Group'
//     }],
//   },
// ] 
