import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/navbar";
// import GameShow from "../game/game_show";

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
    this.groupGames = this.groupGames.bind(this)
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id)
      .then(() => console.log(this.props))
    this.props.fetchGroups()
      .then(() => console.log(this.props))
    this.props.fetchUsers()
      .then(() => console.log(this.props))
    this.props.fetchGames()
      .then(() => console.log(this.props))
      .then(() => this.groupGames())
      // .then(() => this.setState({ currentUserGroups: Object.values(this.props.currentGroups).filter(group => group.users.includes(this.props.sessionUser.id)) }))
      
  }

  // Kirby version
  // componentDidMount() {
  //   this.props.fetchGames();
  //   this.props.fetchUser(this.props.sessionUser.id)
  //     .then(() => console.log(this.props))
  //     .then(() => this.setState({ currentUserGames: this.props.userGames }))
  //     .then(() => console.log(this.state))
  //     .then(() => {
  //       let games = [];
  //       this.props.allGames?.map(game => {

  //         if (this.state.currentUserGames.includes(game._id)) {
  //           games.concat(game);
  //         }
  //       });
  //       console.log(games);
  //       this.setState({ gameObjects: games });
  //     });

  //   // this.props.fetchGame(this.props.match.params.id);
  //   // this.props.fetchUserLibrary();

  // }




  groupGames() {
    // debugger
    let allGroupGames = [];
    let groupUserIds = this.props.currentGroup?.users;
    let groupUsers = groupUserIds?.map((userId) => {
      // debugger
      return this.props.allUsers[userId]
    })
    groupUsers.map((user) => {
      user.games?.concat(allGroupGames)
    })
    return allGroupGames;
  }
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

  render () {
    // debugger

    const { currentGroup, allUsers, allGames, userGroups } = this.props;
    if (!currentGroup) return null
    if (!allUsers) return null
    if (!allGames) return null
    // if (allGames && allUsers && currentGroup) return this.groupGames()

    

    
    // debugger
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
            {/* currentGroup.users is an [] idx start at 0, values are ObjectIDs */}
            <ul>
              { 
              currentGroup.users?.map((user, index) => {
                let listUsername = allUsers[user]?.username;
                return <li className="gs-user-li" key={user.id}>{`${index+1} ${listUsername}`}</li>})
              }
              {/* <li className="gs-user-li">member 1</li>
              <li className="gs-user-li">member 2</li>
              <li className="gs-user-li">member 3</li>
              <li className="gs-user-li">member 1</li>
              <li className="gs-user-li">member 2</li>
              <li className="gs-user-li">member 3</li> */}
            </ul>
            {/* <button>Group Suggest</button> */}
          </div>
          <div className="gs-games-container">
            <ul className="gs-games-list">

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


