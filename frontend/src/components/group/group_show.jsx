import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/navbar";
import LibraryItem from "../library/library_item"
// import GameShow from "../game/game_show";

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupGames: [],
      groupGameObjects: []
    }
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id)
    this.props.fetchGroups()
    this.props.fetchUsers()
    this.props.fetchGames()
      .then(() => {
        let groupGamesArr = []
        this.props.currentGroup.users?.map((user) => {
          let userGames = this.props.allUsers[user]?.games
          groupGamesArr = groupGamesArr.concat(userGames)
          console.log(groupGamesArr)
        })
        debugger
        this.setState({groupGames: groupGamesArr})
      })
      .then(() => {
        let gameObjectsArr = []
        debugger
        this.state.groupGames?.map((gameId) =>{
          let gameObject = this.props?.allGames[gameId]
          gameObjectsArr.push(gameObject)
          console.log(gameObjectsArr)
        })
        this.setState({groupGameObjects: gameObjectsArr})
        console.log(this.state)
      })


    }
    
    

  render () {
    // debugger

    const { currentGroup, allUsers, allGames, userGroups } = this.props;
    if (!currentGroup) return null
    if (!allUsers) return null
    if (!allGames) return null
    // if (allGames && allUsers && currentGroup) return this.groupGames()

    const gameTiles = () => {
      debugger
      return (
        
        (this.state.groupGameObjects?.length > 0)
          ? <li>
              {
              this.state.gameObjects.map((game) => {
              <div className="library-index-item">
                <img src={game.image} alt={game.image} id="game-img--library" />
                <h1 id="game-title--library">{game.name}</h1>
              </div>
              })
              // this.state.gameObjects.map((game) => <LibraryItem game={game} key={game._id} />)
              }
            </li>
          : <li>
              <p>Loading Tile</p>
            </li>
      )
    }

    
    debugger
    return(
      <div className="group-show-container">
        {/* <NavBar /> */}
        <div className="gs-sub-header">
          <h1>{currentGroup.name}</h1>
          <div className="btn--share-group">Share Code: {currentGroup.shareCode}</div>
        </div>
        <div className="gs-content">
          <div className="gs-user-list-container">
            <h2>Group Members</h2>
            <ul>
              { 
              currentGroup.users?.map((user, index) => {
                let listUsername = allUsers[user]?.username;
                return <li className="gs-user-li" key={user.id}>{`${index+1} ${listUsername}`}</li>})
              }
            </ul>
            {/* <button>Group Suggest</button> */}
          </div>
          <div className="gs-games-container">
            <ul className="gs-games-list">
              {/* {this.gameTiles} */}
              {
              (this.state.groupGameObjects?.length > 0)
              ? <li>
                {
                  // this.state.gameObjects?.map((game) => {
                  //   return(
                  //   <div className="library-index-item">
                  //     <img src={game.image} alt={game.image} id="game-img--library" />
                  //     <h1 id="game-title--library">{game.name}</h1>
                  //   </div>)
                  // })
                  this.state.gameObjects.map((game) => <LibraryItem game={game} key={game._id} />)
                }
                </li>
              : <li>
                  <p>Loading Tile</p>
                </li>
              }


              {/* {
                currentGroup.users?.map((user, index) => {
                  allUsers[user]?.games?.map((game) => {
                    // let listGame = allGames[game]
                    return (
                      game 
                    // <li key={game.id}>
                    //   <h1>{listGame.name}</h1>
                    //   <p>{listGame.image}</p>
                    // </li>
                    )
                  })
                  return <li>{game}</li>
                })
              } */}


              {/* {
                currentGroup.users?.map((user, index) => {
                  let listUserGames = allUsers[user]?.username;
                  return <li className="gs-user-li" key={user.id}>{`${index + 1} ${listUsername}`}</li>;
                })
              } */}
              {/* { currentGroup.users ? this.groupGames() } */}

              {/* <li className="gs-game-item">Game 1</li>
              <li className="gs-game-item">Game 2</li>
              <li className="gs-game-item">Game 3</li>
              <li className="gs-game-item">Game 4</li>
              <li className="gs-game-item">Game 5</li>
              <li className="gs-game-item">Game 6</li>
              <li className="gs-game-item">Game 7</li>
              <li className="gs-game-item">Game 8</li>
              <li className="gs-game-item">Game 9</li>
              <li className="gs-game-item">Game 10</li>
              <li className="gs-game-item">Game 11</li> */}
              {/* {
              games.map(game => 
              <GameIndexItem openModal={openModal} game={game} key={game.id}/>)
              } */}
            </ul> 
          </div>            
        </div>
      </div>
    )
  }
}

export default GroupShow;






// this.props.fetchUserLibrary(this.props.currentUser?.id)
    //   // .then(() => this.setState({ currentUserGames: this.props.userGames }))



    // {
    //   currentGroup.users?.map((user, index) => {
    //     let listUsername = allUsers[user]?.username;
    //     return <li className="gs-user-li" key={user.id}>{`${index + 1} ${listUsername}`}</li>;
    //   });
    // }


      // .then((userLib) => {
      //   let gameIds = Object.values(userLib)
      //   console.log(`Game Ids after values: ${gameIds} and ${userLib}`)
      //   let games = []
      //   gameIds.map((gameId) => {
      //     console.log(`This is game Id ${gameId}`)
      //     games.push(this.props.allGames[gameId])
      //   })
      //   console.log(games)
      // })
      
      // .then(() => this.setState({ currentUserGroups: Object.values(this.props.currentGroups).filter(group => group.users.includes(this.props.sessionUser.id)) }))
      
  

  // Kirby version
  // class Library extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUserGames: [],
  //     gameObjects: []
  //   };
  // }

  // componentDidMount() {
  //   this.props.fetchGames();
  //   this.props.fetchUser(this.props.sessionUser.id)
  //     .then(() => console.log(this.props))
  //     .then(() => this.setState({ currentUserGames: this.props.userGames }))
  //     .then(() => console.log(this.state))
  //     .then(() => {
  //       let games = [];
  //       this.props.allGames?.map(game => {
  //         // debugger
  //         if (this.state.currentUserGames.includes(game._id)) {
  //           // debugger
  //           games.push(game);
  //         }
  //       });
  //       this.setState({ gameObjects: games });
  //       console.log(games);
  //     })





  // groupGames() {
  //   // debugger
  //   let allGroupGames = [];
  //   let groupUserIds = this.props.currentGroup?.users;
  //   let groupUsers = groupUserIds?.map((userId) => {
  //     // debugger
  //     return this.props.allUsers[userId]
  //   })
  //   groupUsers.map((user) => {
  //     user.games?.concat(allGroupGames)
  //   })
  //   return allGroupGames;
  // }
  //   let groupGamesArr = this.props.currentGroup.users?.map((user, index) => {
  //     debugger
  //     let userGamesArr = this.props.allUsers[user].games
  //     return userGamesArr
  //       //?.map((game)    
  //       // user.games.map((game) => {
  //     })
  //   return groupGamesArr
  // }
  

//   {
//   currentGroup.users?.map((user, index) => {
//     let listUsername = allUsers[user]?.username;
//     return <li className="gs-user-li" key={user.id}>{`${index + 1} ${listUsername}`}</li>;
//   });
// }


