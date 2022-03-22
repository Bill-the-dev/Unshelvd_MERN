import React from 'react';

function SuggestItem() {

  const {game} = this.props;

  return (
      <div className='suggest-item-container'>
        <img src={game.image} alt={game.image} id="game-img--library"/>
        <div id="game-title--library">{game.name}</div>
      </div>
  )
}

 export default SuggestItem;