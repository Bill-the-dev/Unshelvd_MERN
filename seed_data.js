const mongoose = require('mongoose');
const User = require('./models/User');
const Group = require('./models/Group');
const Game = require('./models/Game');
const { schema } = require('./models/Game');

// mongoose
//   .connect('mongodb://localhost/   ', {
//     useNewUrlParser: true, useUnifiedTopology: true 
//   }).then(() => {
//     console.log('Mongo connection open');
//   });

const seedUsers = [
  {
    username: '',
    email: '',
    password: '',
    games: [{
      // type: Schema.Types.ObjectId,
      // ref: 'Game'
    }],
    groups: [{
      // Schema.Types.ObjectId,
      // ref: 'Group'
    }],
  },
] 

const seedGames = [
  {
    name: '',
    image: '',
    playerCount: {
      min: 0,
      max: 0
    },
    category: [

    ],
    gameType: [

    ],
    description: '',
    userCreator: ''
  }
]

const seedGroups = [
  {
    name: '',
    users: [

    ],
    userGroupCreator: {
      // type: Schema.Types.ObjectId,
      // ref: 'User'
    }
  }
]

const games = [
  new Game(
    {
      name: '',
      image: '',
      playerCount: {
        min: 0,
        max: 0
      },
      category: [

      ],
      gameType: [

      ],
      description: '',
      userCreator: ''
    }
  ),
  new Game(
    {
      name: '',
      image: '',
      playerCount: {
        min: 0,
        max: 0
      },
      category: [

      ],
      gameType: [

      ],
      description: '',
      userCreator: ''
    }
  ),
  new Game(
    {
      name: '',
      image: '',
      playerCount: {
        min: 0,
        max: 0
      },
      category: [

      ],
      gameType: [

      ],
      description: '',
      userCreator: ''
    },
  )
]


let gamesDone = 0;
for (let i = 0; i < games.length; i++) {
  games[i].save((err, res) => {
    gamesDone++
    if (gamesDone === games.length) {
      exit() 
    }
  });
  // should add documents, then disconnect once finished (callback)
  
}
const exit = () => {
  mongoose.disconnect();
}


