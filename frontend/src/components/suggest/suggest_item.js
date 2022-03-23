import React from 'react';

 class SuggestItem extends React.Component {

  render() {

    const {game, openModal} = this.props

    return (
      <div className='suggest-item-container' onClick={() => openModal(game)} >
        <img src={game.image} alt={game.image} id="game-img--library" />
        <div id="game-title--library">{game.name}</div>
      </div>
    )
  }
 }

 export default SuggestItem;