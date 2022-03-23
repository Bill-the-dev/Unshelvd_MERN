import React from "react";
import { Link } from "react-router-dom";


class GameItem extends React.Component {
  constructor(props) {
    super(props);

  }


  render(){
    // debugger
    const { currentUser, game } = this.props;
    return(
      <li className="library-index-item">
        <img src={game.image} alt={game.image} id="game-img--library"/>
        <h1 id="game-title--library">{game.name}</h1>
      </li>
    )
  }

}


export default GameItem;