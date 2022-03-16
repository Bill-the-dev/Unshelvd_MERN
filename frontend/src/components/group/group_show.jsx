import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/navbar";
// import GameShow from "../game/game_show";

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    
    return(
      <div className="group-show-container">
        <NavBar />
        <div className="temp-header">
          <h1>Group Name</h1>
          <div className="btn--share-group">Share Group</div>
        </div>
        <div className="gs-content">
          <div className="gs-user-list-container">
            <h2>Group Users List</h2>
            <ul>
              <li>member 1</li>
              <li>member 2</li>
              <li>member 3</li>
            </ul>
            {/* <button>Group Suggest</button> */}
          </div>
          <div className="gs-games-container">
            <ul className="gs-games-list">
              <li>Game 1</li>
              <li>Game 2</li>
              <li>Game 3</li>
              <li>Game 4</li>
              <li>Game 5</li>
              <li>Game 6</li>
              <li>Game 7</li>
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