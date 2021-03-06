import React from "react";

class GameItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { currentUser, game, openModal } = this.props;
    return(
      <li className="library-index-item" onClick={() => openModal(game)}>
        <img src={game.image} alt={game.image} id="game-img--library"/>
        <h1 id="game-title--library">{game.name}</h1>
      </li>
    )
  }

}


export default GameItem;