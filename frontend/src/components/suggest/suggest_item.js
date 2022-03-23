import React from 'react';

 class SuggestItem extends React.Component {

  render() {

    const {game, openModal} = this.props

    return (
      <div className='suggest-item-container' onClick={() => openModal(game)} >
        <img src={game.image} alt={game.image} id="game-img--suggest" />
        <div id="game-title--suggest">{game.name}</div>
      </div>
    )
  }
 }

 export default SuggestItem;