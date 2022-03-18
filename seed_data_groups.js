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

// const seedGroups = [
//   {
//     name: '',
//     users: [

//     ],
//     userGroupCreator: {
//       // type: Schema.Types.ObjectId,
//       // ref: 'User'
//     }
//   }
// ]

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
}


// FORMAT

// const seedGroups = [
//   {
//     name: '',
//     users: [

//     ],
//     userGroupCreator: {
//       // type: Schema.Types.ObjectId,
//       // ref: 'User'
//     }
//   }
// ]