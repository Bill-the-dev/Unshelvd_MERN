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

// const seedGames = [
//   {
//     name: '',
//     image: '',
//     playerCount: {
//       min: 0,
//       max: 0
//     },
//     category: [

//     ],
//     gameType: [

//     ],
//     description: '',
//     userCreator: ''
//   }
// ]

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

const gamesTest = [
  new Game(
    {
      name: 'Codenames',
      image: 'temp',
      playerCount: {
        min: 2,
        max: 8
      },
      category: [

      ],
      gameType: [
        'Board Game', 'Party', 'Word', 'Puzzle', 'Quick', 'Team Play', 'Deduction'
      ],
      description: 'Codenames is an easy deduction party game. The game is divided into red and blue, each side has a team leader, the team leader\'s goal is to lead their team to the final victory.The two rival spymasters know the secret identities of 25 agents.Their teammates know the agents only by their CODENAMES. Connected Play: https://codenames.game/ Instructions: https://czechgames.com/en/codenames/video/',
      // userCreator: ObjectId('62311d449bd3bc8378ded480')
    }
  ),
  new Game(
    {
      name: 'Scrabble',
      image: 'temp',
      playerCount: {
        min: 2,
        max: 4
      },
      category: [
        'Board Game', 'Word', 'Tile'
      ],
      gameType: [
        'Connected', 'Unplugged'
      ],
      description: 'Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns, and be included in a standard dictionary or lexicon. Connected Play: https://www.lexulous.com/',
      // userCreator: ObjectId('62311d449bd3bc8378ded480')
    }
  ),
  new Game(
    {
      name: 'Spoons',
      image: 'temp',
      playerCount: {
        min: 3,
        max: 1000
      },
      category: [
        'Playing Cards', 'Party', 'Quick'
      ],
      gameType: [
        'Unplugged'
      ],
      description: 'Dig into this fast paced card swapping game!',
      // userCreator: ObjectId('62311d449bd3bc8378ded480')
    },
  )
]

const loadCounter = () => {
  let gamesDone = 0;
  for (let i = 0; i < gamesTest.length; i++) {
    // debugger
    gamesTest[i].save((err, res) => {
      console.log(`errors = ${err} res = ${res} `)
      console.log(`i = ${i} game = ${gamesTest[i]} `)
      gamesDone++
      if (gamesDone === gamesTest.length) {
        // debugger
        console.log(`${i}`)
        exit() 
      }
      // debugger
    });
}

// should add documents, then disconnect once finished (callback below)
  
}
const exit = () => {
  mongoose.disconnect()
    .then(() => console.log('Disonnected from MongoDB successfully'))
}


