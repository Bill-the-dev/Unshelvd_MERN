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


const gamesTest = [
  new Game(
    {
    _id: 100,  
    name: 'Dragoon',
      image: 'https://cf.geekdo-images.com/yXBV30yleOlJyY12tF6_ew__imagepagezoom/img/bXvKFuYxRIexKegX05UkVH9UNbw=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic4200390.png',
    playerCount: {
      min: 2,
      max: 4
    },
    category: [
      'Board Game', 'Strategy'
    ],
    gameType: [
      "Unplugged"
    ],
      description: 'You and your fellow dragons have lived peacefully on your island...until now. The invasion of humans has awakened your instincts to dominate and hoard as much gold as you can get your claws on! Instructions: https://static1.squarespace.com/static/53090200e4b032b4d4b015a8/t/5805ab3fb3db2bc91573f288/1476766541675/Dragoon_instructions.pdf',
    // userCreator: ObjectId('001001')
    }
  ),


  // new Game(
  //   {
  //   name: 'Crazy Eights',
  //   image: 'temp',
  //   playerCount: {
  //     min: 2,
  //     max: 8
  //   },
  //   category: [
  //     "Playing Cards"
  //   ],
  //   gameType: [
  //     "Unplugged"
  //   ],
  //   description: 'Crazy Eights first known in the 1930s and was called Eights. In the 1940s the name became Crazy Eights after the military designation for the discharge of mentally unstable soldiers, Section 8. Crazy Eights is a card shedding game where one card is usually played at a time. There are many variations of the game, and Crazy Eights is also known as Craits, Last One, Mau-Mau, Pesten, Rockaway, Swedish Rummy, Switch, Last Card, Screw Your Neighbour, Püskiyon and Tschausepp. Bartok, Mao, Quango, Zar, and Taki are more extreme variations. Connected Play: https://www.trapapps.com/web/044/site/game/crazyeights  Instructions: https://www.pagat.com/eights/crazy8s.html',
  //   // userCreator: ObjectId('001001')
  //   }
  // ),
  // new Game(
  //   {
  //   name: 'Left, Center, Right (LCR)',
  //   image: '',
  //   playerCount: {
  //     min: 3,
  //     max: 10
  //   },
  //   category: [
  //     "Playing Cards", "Dice"
  //   ],
  //   gameType: [

  //   ],
  //   description: 'Roll your way to victory in this dice game by being the last player to hold their chips! https://bicyclecards.com/how-to-play/left-center-right/',
  //   // userCreator: ObjectId('001001')
  //   }
  // ),
  // new Game(
  //   {
  //   name: 'Wingspan',
  //   image: 'temp',
  //   playerCount: {
  //     min: 1,
  //     max: 5
  //   },
  //   category: [
  //     'Board Game', 'Strategy' 
  //   ],
  //   gameType: [
  //     'Unplugged'
  //   ],
  //   description: 'Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It\'s designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez.',
  //   // userCreator: ObjectId('001001')  
  //   }
  // ),
  // new Game(
  //   {
  //   name: 'Onitama',
  //   image: 'temp',
  //   playerCount: {
  //     min: 2,
  //     max: 2
  //   },
  //   category: [
  //     'Board Game', 'Strategy'
  //   ],
  //   gameType: [
  //     'Unplugged', 'Online'
  //   ],
  //   description: 'Onitama is a two-player, perfect information abstract game with a random starting set-up. On a 5x5 board, both players start with five pawns on their side, with the main pawn in the middle.',
  //   // userCreator: ObjectId('001001')
  //   }
  // ),


  // new Game(
  //   {
  //     name: 'Codenames',
  //     image: 'temp',
  //     playerCount: {
  //       min: 2,
  //       max: 8
  //     },
  //     category: [
  //       'Board Game', 'Party', 'Word', 'Puzzle', 'Quick', 'Team Play', 'Deduction'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: 'Codenames is an easy deduction party game. The game is divided into red and blue, each side has a team leader, the team leader\'s goal is to lead their team to the final victory.The two rival spymasters know the secret identities of 25 agents.Their teammates know the agents only by their CODENAMES. Connected Play: https://codenames.game/ Instructions: https://czechgames.com/en/codenames/video/',
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Scrabble',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-scrabble.webp',
  //     playerCount: {
  //       min: 2,
  //       max: 4
  //     },
  //     category: [
  //       'Board Game', 'Word', 'Tile'
  //     ],
  //     gameType: [
  //       'Connected', 'Unplugged'
  //     ],
  //     description: 'Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns, and be included in a standard dictionary or lexicon. Connected Play: https://www.lexulous.com/',
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Spoons',
  //     image: 'temp',
  //     playerCount: {
  //       min: 3,
  //       max: 1000
  //     },
  //     category: [
  //       'Playing Cards', 'Party', 'Quick'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: 'Dig into this fast paced card swapping game!',
  //     // userCreator: ObjectId('001001')    
  //   },
  // ),
  // // added below:
  // new Game(
  //   {
  //     name: 'Catan',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-catan.webp',
  //     playerCount: {
  //       min: 3,
  //       max: 4
  //     },
  //     category: [
  //       'Board Game', 'Party', 'Strategy', 'Dice'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: 'Players take on the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources. Players gain victory points as their settlements grow; the first to reach a set number of victory points, typically 10, wins.',
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Bananagrams',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-bananagrams.jpeg',
  //     playerCount: {
  //       min: 2,
  //       max: 8
  //     },
  //     category: [
  //       'Tile', 'Word', 'Quick'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Bananagrams is a word game wherein lettered tiles are used to spell words. Gameplay involves arranging one's tiles into a grid of connected words faster than one's opponents. The object of the game is to be the first to complete a word grid after the pool of tiles has been exhausted.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Ticket to Ride',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-ticket-to-ride.jpeg',
  //     playerCount: {
  //       min: 2,
  //       max: 5
  //     },
  //     category: [
  //       'Board Game', 'Strategy'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Ticket to Ride is a cross-country train adventure in which players collect and play matching train cards to claim railway routes connecting cities throughout North America.The longer the routes, the more points they earn. Additional points come to those who can fulfill their Destination Tickets by connecting two distant cities, and to the player who builds the longest continuous railway.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Cards Against Humanity',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-cards-against-humanity.webp',
  //     playerCount: {
  //       min: 4,
  //       max: 20
  //     },
  //     category: [
  //       'Board Game', 'Party'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Cards Against Humanity is a party game for horrible people. The game is simple. Each round, one player asks a question from a black card, and everyone else answers with their funniest white card.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Rummikub',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-rummikub.webp',
  //     playerCount: {
  //       min: 2,
  //       max: 4
  //     },
  //     category: [
  //       'Tile', 'Puzzle'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Rummikub is a tile-based game combining elements of the card game rummy and mahjong. Players take turns putting down tiles from their racks into sets (groups or runs) of at least three, drawing a tile if they cannot play. The first player to use all their tiles scores a positive score based on the total of the other players' hands, while the losers get negative scores. An important feature of the game is that players can work with the tiles that have already been played.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Sushi Go Party!',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-sushi-go-party.png',
  //     playerCount: {
  //       min: 2,
  //       max: 8
  //     },
  //     category: [
  //       'Board Game', 'Party', 'Strategy'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "It's a party platter of Mega Maki, Super sashimi, and endless edamame in this expanded version of the best-selling card game. You still earn points by picking winning sushi combos, but now you can customize each game by choosing a La carte from a menu of more than 20 delectable dishes. What's more, up to 8 players can join in on the sushi-feast let the good times roll!",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Jenga',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-jenga.jpeg',
  //     playerCount: {
  //       min: 2,
  //       max: 20
  //     },
  //     category: [
  //       'Tile', 'Party'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Players take turns removing one block from within the tower and placing it back on the top. Cross your fingers and hold your breath as the tower grows taller and more unstable with every move. See how many rounds you can go before the tower comes crashing down. The last person to successfully place a block before the tower tumbles is considered the winner.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Uno',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-uno.avif',
  //     playerCount: {
  //       min: 2,
  //       max: 20
  //     },
  //     category: [
  //       'Playing Cards', 'Party', 'Quick'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Players take turns matching a card in their hand with the current card shown on top of the deck either by color or number. Before playing your next to last card, you must say 'UNO'. The first player to play all of the cards in their hand in each round scores points for the cards their opponents are left holding. The first player to score 500 points wins the game.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Clue',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-clue.jpeg',
  //     playerCount: {
  //       min: 3,
  //       max: 6
  //     },
  //     category: [
  //      'Board Game', 'Deduction'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Clue is a murder mystery game where the object of the game is to determine who murdered the game's victim, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Monopoly',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-monopoly.jpeg',
  //     playerCount: {
  //       min: 2,
  //       max: 8
  //     },
  //     category: [
  //       'Board Game', 'Strategy', 'Dice'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Monopoly is a multi-player economics-themed board game. In the game, players roll two dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, with the goal being to drive them into bankruptcy.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Sequence',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-sequence.webp',
  //     playerCount: {
  //       min: 2,
  //       max: 12
  //     },
  //     category: [
  //       'Board Game', 'Strategy', 'Team Play'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Sequence is an abstract strategy board-and-card game. The object of the game is to form rows of five poker chips on the board by placing the chips on the board spaces corresponding to cards played from the player's hand.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Pictionary',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-pictionary.jpeg',
  //     playerCount: {
  //       min: 2,
  //       max: 20
  //     },
  //     category: [
  //       'Pen & Paper', 'Party', 'Quick', 'Team Play'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "Pictionary is a charades-inspired word-guessing game. Teams take turns drawing and guessing as many words or phrases as possible in a timed round.",
  //     // userCreator: ObjectId('001001')    
  //   }
  // ),
  // new Game(
  //   {
  //     name: 'Coup',
  //     image: 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/main/z-images/bg-coup.jpg',
  //     playerCount: {
  //       min: 3,
  //       max: 6
  //     },
  //     category: [
  //       'Board Game', 'Bluffing', 'Deduction'
  //     ],
  //     gameType: [
  //       'Unplugged'
  //     ],
  //     description: "In the not too distant future, The government is run for profit by a new 'royal class' Of multi national CEOs. Their greed and absolute control of the economy has reduced all but a privileged few to lives of poverty and Desperation.Out of the oppressed masses rose The resistance, an underground organization focused on overthrowing these powerful rulers. The Valiant efforts of the resistance have created Discord, intrigue and weakness in the political courts of the nouveau royal, bringing the government to brink of collapse. But for you, a powerful government official, this is your opportunity to manipulate, bribe and bluff your way into absolute power. To be successful, you must destroy the influence of your rivals and drive them into Exile. In these Turbulent times there is only room for one to survive.",
  //     // userCreator: ObjectId('001001')
  //   }
  // )
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


