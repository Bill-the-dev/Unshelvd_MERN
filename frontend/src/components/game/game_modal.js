import React from 'react';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom'

 function GameModal(props) {

  const { modal, currentUser, updateUser, history} = props;

  const addGameLibrary = () => {
    let updatedUser = currentUser
      // debugger
      updatedUser.games = currentUser.games.concat(modal._id)
      updateUser(updatedUser)
      // debugger
      history.push({pathname: '/library'})
  }

  

   return (

    <div className="game-modal-container">

    <div className="game-modal-item">

        <h1 id="game-item-title">{modal.name}</h1>
        <img src={modal.image} alt={modal.image} id="game-img--modal" />

        <h2 id="game-modal-num-players">Players: {modal.playerCount?.min} - {modal.playerCount?.max}</h2>
        <h2 id="game-modal-category">Category: {modal.category}</h2>
        <p id="game-modal-description">{modal.description}</p>
        <h2 id="game-modal-setting">Setting: {modal.gameType}</h2>
        
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

 const mapStateToProps = (state) => {
    return ({
      currentUser: state.entities.users.currentUser,
    })
 }

 const mapDispatchToProps = (dispatch) => {
   return ({
    updateUser: () => dispatch(updateUser())
   })
 }


 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameModal));