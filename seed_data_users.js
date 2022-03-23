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

const seedUsers = [
  new User (
    {
      _id: '623b4d3143f29e517e625064',
      username: 'Unshelved',
      email: 'unshelvd@unshelvd.com',
      password: '$2a$10$j13TJl5FzPxQhRtf58sDSOmJLOPw3z/8AL5La1GLi0UR5dX.kWMM2',
      games: [
        '623b4c050222f83386e47760',
        '62346dc0e58d7eaa48659746',
        '62346dc0e58d7eaa48659748',
        '62346dc0e58d7eaa48659749',
        '62346dc0e58d7eaa4865974a',
        '62346dc0e58d7eaa4865974b',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa4865974d',
        '62346dc0e58d7eaa4865974e',
        '62346dc0e58d7eaa4865974f',
        '62346dc0e58d7eaa48659750',
        '62346dc0e58d7eaa48659751',
        '62346dc0e58d7eaa48659752',
        '62346dc0e58d7eaa48659753',
        '62346dc0e58d7eaa48659754',
        '62346dc0e58d7eaa48659755',
        '62346dc0e58d7eaa48659756',
        '62346dc0e58d7eaa48659757',
        '62346dc0e58d7eaa48659758',
        '62346dc0e58d7eaa48659759',
        '623b55450222f83386e47761',  // LCR
        '623b8ac3a5a2e640e0c131a4',  // Hangman
        '623b8aa5a5a2e640e0c131a3',  // Dots and Boxes
        '623b8c35a5a2e640e0c131a5',  // Golf
        '623b90f8a5a2e640e0c131a6',  // Rummy 500
      ],
      // groups: [
      //   // don't add any, this is the full library!
      // ],
    }
  ),
  new User(
    {
      _id: '62311d449bd3bc8378ded480',
      username: 'demoUser',
      email: 'demo@demo.com',
      password: '$2a$10$vGUlNnmg6R1RQQOfmYULO.mwhaohZRUqwWOoi039uoK.zqsbJqmz2',
      games: [
        '623b4c050222f83386e47760',
        // '623b55450222f83386e47761',
        '62346dc0e58d7eaa48659748',
        '62346dc0e58d7eaa48659749',
        '62346dc0e58d7eaa4865974a',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa4865974d',
        '62346dc0e58d7eaa4865974e',
        '62346dc0e58d7eaa4865974f',
        // randomly selected
      ],
      groups: [
        '6234777f4cdf8b5e4353ebd5', // library
        '623477a54cdf8b5e4353ebd9', // notsus
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),    

  new User (
    {
      _id: '6234768df40525e9d4a9b44b',
      username: 'ColonelMustard',
      email: 'defNotSus@clue.com',
      password: 'password',
      games: [
        '623b4c050222f83386e47760',
        '62346dc0e58d7eaa48659746',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa48659759',
      ],
      groups: [
        '6234777f4cdf8b5e4353ebd5', // library
        '623477a54cdf8b5e4353ebd9', // notsus
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b44c',
      username: 'ProfPlum',
      email: 'aLittleSus@clue.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa4865974a',
        '62346dc0e58d7eaa4865974b',
        '62346dc0e58d7eaa4865974e',
        '62346dc0e58d7eaa4865974f',
        '62346dc0e58d7eaa48659750',
      ],
      groups: [
        '6234777f4cdf8b5e4353ebd5', // library
        '623477a54cdf8b5e4353ebd9', // notsus
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b44d',
      username: 'misterGreen',
      email: 'withEnvy@clue.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa48659748',
        '62346dc0e58d7eaa48659749',
        '62346dc0e58d7eaa48659759',
      ],
      groups: [
        '6234777f4cdf8b5e4353ebd5', // library
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b44e',
      username: 'MrsWhite',
      email: 'jaccuse@clue.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa4865974f',
        '62346dc0e58d7eaa48659755',
        '62346dc0e58d7eaa48659757',
        '62346dc0e58d7eaa48659758',
      ],
      groups: [
        '6234777f4cdf8b5e4353ebd5', // library
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b44f',
      username: 'MsScarlett',
      email: 'redWithWhat@clue.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa4865974a',
        '62346dc0e58d7eaa4865974b',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa4865974d',
        '62346dc0e58d7eaa48659758',
        '62346dc0e58d7eaa48659759',
      ],
      groups: [
        '623477a54cdf8b5e4353ebd9', // notsus
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '623b681f0222f83386e47763',
      username: 'MissusPeacock',
      email: 'theyWillNotice@clue.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa48659756',
        '62346dc0e58d7eaa48659757',
        '62346dc0e58d7eaa48659758',
        '62346dc0e58d7eaa48659759',
      ],
      groups: [
        '623477a54cdf8b5e4353ebd9', // notsus
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b451',
      username: 'aCandleStick',
      email: 'lumierreTheHost@clue.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa48659754',
        '62346dc0e58d7eaa48659755',
        '62346dc0e58d7eaa48659756',
      ],
      groups: [
        '6234777f4cdf8b5e4353ebd5', // library
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b452',
      username: 'theLeadPipe',
      email: 'theBetterOption@clue.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa4865974a',
        '62346dc0e58d7eaa4865974b',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa48659758',
        '62346dc0e58d7eaa48659759',
      ],
      groups: [
        '6234777f4cdf8b5e4353ebd5', // library
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b453',
      username: 'TopsyKirby',
      email: 'Kirby@unshelvd.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa48659748',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa4865974d',
        '62346dc0e58d7eaa4865974e',
        '62346dc0e58d7eaa48659751',
        '62346dc0e58d7eaa48659752',
        '62346dc0e58d7eaa48659753',
      ],
      groups: [
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '623b67f30222f83386e47762',
      username: 'WinnaBill',
      email: 'Bill@unshelvd.com',
      password: 'password',
      games: [
        '62346dc0e58d7eaa48659746',
        '62346dc0e58d7eaa48659748',
        '62346dc0e58d7eaa4865974d',
        '62346dc0e58d7eaa4865974e',
        '62346dc0e58d7eaa48659750',
        '62346dc0e58d7eaa48659751',
        '62346dc0e58d7eaa48659758',
        '62346dc0e58d7eaa48659759',
      ],
      groups: [
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b455',
      username: 'EmilyTheUndefeated',
      email: 'Emily@unshelvd.com',
      password: 'password',
      games: [
        // '623b55450222f83386e47761',
        '62346dc0e58d7eaa4865974b',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa4865974d',
        '62346dc0e58d7eaa48659756',
        '62346dc0e58d7eaa48659757',
        '62346dc0e58d7eaa48659758',
        '62346dc0e58d7eaa48659759',
      ],
      groups: [
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),
  new User(
    {
      _id: '6234768df40525e9d4a9b456',
      username: 'EthanWithTheW',
      email: 'Ethan@unshelvd.com',
      password: 'password',
      games: [
        '623b4c050222f83386e47760',
        // '623b55450222f83386e47761',
        '62346dc0e58d7eaa4865974b',
        '62346dc0e58d7eaa4865974c',
        '62346dc0e58d7eaa4865974d',
        '62346dc0e58d7eaa4865974e',
        '62346dc0e58d7eaa4865974f',
        '62346dc0e58d7eaa48659755',
        '62346dc0e58d7eaa48659756',
        '62346dc0e58d7eaa48659757',
      ],
      groups: [
        '623477c34cdf8b5e4353ebdf', // everybody
      ],
    }
  ),

] 


// LOAD LOGIC

const loadCounter = () => {
  let usersDone = 0;
  for (let i = 0; i < seedUsers.length; i++) {
    // debugger
    seedUsers[i].save((err, res) => {
      console.log(`errors = ${err} res = ${res} `);
      console.log(`i = ${i} user = ${seedUsers[i]} `);
      usersDone++;
      if (usersDone === seedUsers.length) {
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




// email: unshelvd@unshelvd.com
// user: Unshelvd
// password: Unshelvd
// hash: '$2a$10$j13TJl5FzPxQhRtf58sDSOmJLOPw3z/8AL5La1GLi0UR5dX.kWMM2'
// ObjectId: '623b4d3143f29e517e625064'

// All Games Array: 
// [
//   '623b4c050222f83386e47760',
//   '62346dc0e58d7eaa48659746',
//   '623b55450222f83386e47761',  // removed
//   '62346dc0e58d7eaa48659748',
//   '62346dc0e58d7eaa48659749',
//   '62346dc0e58d7eaa4865974a',
//   '62346dc0e58d7eaa4865974b',
//   '62346dc0e58d7eaa4865974c',
//   '62346dc0e58d7eaa4865974d',
//   '62346dc0e58d7eaa4865974e',
//   '62346dc0e58d7eaa4865974f',
//   '62346dc0e58d7eaa48659750',
//   '62346dc0e58d7eaa48659751',
//   '62346dc0e58d7eaa48659752',
//   '62346dc0e58d7eaa48659753',
//   '62346dc0e58d7eaa48659754',
//   '62346dc0e58d7eaa48659755',
//   '62346dc0e58d7eaa48659756',
//   '62346dc0e58d7eaa48659757',
//   '62346dc0e58d7eaa48659758',
//   '62346dc0e58d7eaa48659759',
// ]
