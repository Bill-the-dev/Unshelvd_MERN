import React from 'react';
// import {openModal} from '../../actions/modal_actions'

// function SuggestItem(props) {

//   const {game, openModal} = props;
//   // const handleClick = game => () => openModal('Item', game)


//   return (
//       <div className='suggest-item-container' onClick={(game) => openModal('Item', game)} >
//         <img src={game.image} alt={game.image} id="game-img--library" />
//         <div id="game-title--library">{game.name}</div>
//       </div>
//   )
// }

//  export default SuggestItem;





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