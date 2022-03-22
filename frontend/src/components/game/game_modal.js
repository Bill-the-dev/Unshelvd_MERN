import React from 'react';

 function GameModal(props) {

  const { modal, currentUser, currentGame, updateUser, history} = props;

  const addGameLibrary = () => {
    let updatedUser = currentUser
      // debugger
      updatedUser.games = currentUser.games.concat(currentGame._id)
      updateUser(updatedUser)
      // debugger
      history.push({pathname: '/library'})
  }

  

   return (

    <div className="game-show-container">

    <div className="game-show-item">

        <h1 id="game-show-title">{modal.name}</h1>
        <img src={modal.image} alt={modal.image} id="game-img--show" />

        <h2 id="game-show-num-players">Players: {modal.playerCount?.min} - {modal.playerCount?.max}</h2>
        <h2 id="game-show-category">Category: {modal.category}</h2>
        <p id="game-show-description">{modal.description}</p>
        <h2 id="game-show-setting">Setting: {modal.gameType}</h2>
        
        <div>
            { 
                (!currentUser.games?.includes(modal._id)) ?
                    <button id="button--add-game-to-library" onClick={() => addGameLibrary()}>Add Game to Library</button> : null
            }
        </div>

    </div>
</div>

   )
 }

 export default GameModal;