 import React from 'react';

 class GameModal extends React.Component {

  constructor(props) {
    super(props)
    this.addGameLibrary = this.addGameLibrary.bind(this);
    this.removeGameLibrary = this.removeGameLibrary.bind(this);
    this.state = {
      inLibrary: false
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser._id)
  }

  addGameLibrary() {
    let updatedUser = this.props.currentUser
    updatedUser.games = this.props.currentUser.games.concat(this.props.modal._id)
    this.props.updateUser(updatedUser)
    this.setState({
      inLibrary: true
    })
  }

  removeGameLibrary() {
    let updatedUser = this.props.currentUser
    updatedUser.games = this.props.currentUser.games.filter(game => game !== this.props.modal._id)
    this.props.updateUser(updatedUser);
    this.setState({
      inLibrary: false
    })
  }

  render() {
    const {modal, currentUser, } = this.props

    return (

      <div className="game-modal-container">
        <div className="game-modal-item">

            <h1 id="game-item-title">{modal.name}</h1>
            <img src={modal.image} alt={modal.image} id="game-img--modal" />

            <div className='game-details'>
              <h2 id="game-modal-num-players">Players: {modal.playerCount?.min} - {modal.playerCount?.max}</h2>
              <h2 id="game-modal-category">Category: {modal.category?.map((cat, i) => {
                            return (i === modal.category.length - 1) ? cat : cat + ", "
              })}</h2>
              <p id="game-modal-description">{modal.description}</p>
              <h2 id="game-modal-setting">Setting: {modal.gameType}</h2>
            </div>
            
            <div>
                { 
                (!currentUser.games?.includes(modal._id)) ?
                    <button id="button--add-game-to-library" onClick={() => this.addGameLibrary()}>Add Game to Library</button> : 
                    <button className="button button--add-game-to-library" onClick={() => this.removeGameLibrary()}>Remove Game from Library</button>
                }
            </div>

        </div>
      </div>
    )
  }
 }



 export default GameModal;