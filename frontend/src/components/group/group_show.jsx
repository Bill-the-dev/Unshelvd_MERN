import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/navbar";
// import GameShow from "../game/game_show";

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroups();
    this.props.fetchGroup(this.props.match.params.id);
    this.props.fetchUsers();
  }

  render () {
    const { currentGroup } = this.props;
    if (!currentGroup) return null
    
    
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
            {/* currentGroup.users is an [] idx start at 0, values are ObjectIDs */}
            <ul>
              { 
              currentGroup.users?.map((user, index) => {
                
                <li className="gs-user-li" key={user.id}>{`${index+1} ${user.username}`}</li>})
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
              <li className="gs-game-item">Game 1</li>
              <li className="gs-game-item">Game 2</li>
              <li className="gs-game-item">Game 3</li>
              <li className="gs-game-item">Game 4</li>
              <li className="gs-game-item">Game 5</li>
              <li className="gs-game-item">Game 6</li>
              <li className="gs-game-item">Game 7</li>
              <li className="gs-game-item">Game 8</li>
              <li className="gs-game-item">Game 9</li>
              <li className="gs-game-item">Game 10</li>
              <li className="gs-game-item">Game 11</li>
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