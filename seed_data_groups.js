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

const seedGroups = [
  new Group (
    {
      _id: '6234777f4cdf8b5e4353ebd5', 
      name: 'The Library',
      shareCode: '513648',
      users: [
        '62311d449bd3bc8378ded480', // demouser
        '6234768df40525e9d4a9b44b', // colmustard
        '6234768df40525e9d4a9b44c', // profplum
        '6234768df40525e9d4a9b44d', // mrgreen
        '6234768df40525e9d4a9b44e', // mrswhite
        '6234768df40525e9d4a9b451', // candle
        '6234768df40525e9d4a9b452', // leadpipe
      ],
      userGroupCreator: '6234768df40525e9d4a9b451' // candle
    }
  ),
  new Group (
    {
      _id: '623477a54cdf8b5e4353ebd9', 
      name: 'NotSus',
      shareCode: '468921',
      users: [
        '6234768df40525e9d4a9b44b', // colmustard
        '6234768df40525e9d4a9b44c', // profplum
        '6234768df40525e9d4a9b44f', // scarlet
        '623477a54cdf8b5e4353ebd9', // peacock
        '62311d449bd3bc8378ded480', // demouser
      ],
      userGroupCreator: '6234768df40525e9d4a9b44b' // colmustard
    }
  ),
  new Group (
    {
      _id: '623477c34cdf8b5e4353ebdf', 
      name: 'Everybody!',
      shareCode: '777561',
      users: [
        '62311d449bd3bc8378ded480',  // demouser
        '6234768df40525e9d4a9b44b',  // colmustard
        '6234768df40525e9d4a9b44c',  // profplum
        '6234768df40525e9d4a9b44d',  // mrgreen
        '6234768df40525e9d4a9b44e',  // mrswhite
        '6234768df40525e9d4a9b44f',  // scarlet
        '623b681f0222f83386e47763',  // peacock
        '6234768df40525e9d4a9b451',  // candlestick
        '6234768df40525e9d4a9b452',  // leadpipe
        '6234768df40525e9d4a9b453',  // kirby
        '623b67f30222f83386e47762',  // bill
        '6234768df40525e9d4a9b455',  // emily
        '6234768df40525e9d4a9b456',  // ethan
      ],
      userGroupCreator: '623b67f30222f83386e47762'  // bill
    }
  ),
]

const loadCounter = () => {
  let groupsDone = 0;
  for (let i = 0; i < seedGroups.length; i++) {
    // debugger
    seedGroups[i].save((err, res) => {
      console.log(`errors = ${err} res = ${res} `);
      console.log(`i = ${i} group = ${seedGroups[i]} `);
      groupsDone++;
      if (groupsDone === seedGroups.length) {
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