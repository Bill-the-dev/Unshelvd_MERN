import React from "react";
import { Link } from "react-router-dom";

class GameShow extends React.Component {
    constructor(props) {
        super(props);

       
    }

    componentDidMount() {
        this.props.fetchGames();
        this.props.fetchGame(this.props.match.params.id);
        this.props.fetchUser(this.props.currentUserId)
    }

    // componentDidUpdate(prevProps){
        
    //     if (prevProps.game !== this.props.game){
    //         this.props.fetchGame(this.props.match.params.id);
    //     }
    // }

    addGameLibrary() {
        let updatedUser = this.props.currentUser
        // debugger
        updatedUser.games = this.props.currentUser.games.concat(this.props.currentGame._id)
        this.props.updateUser(updatedUser)
        // debugger
        this.props.history.push({pathname: '/library'})
    }

    render() {
        // let currentGame;
        // for (let game of this.props.games) {
        //     if (this.props.gameId === game.id) {
        //         currentGame = game;
        //     }
        // }
        // debugger
        const {currentGame} = this.props;
        if (!currentGame) return null;
    
        return (
            <div>
                {/* <div className='modal-close' onClick={this.props.closeModal}>✕</div> */}
                <div className="game-show-item">
                    <h1>Test Item</h1>
                    
                    {/* <h1 id="game-show-title">{this.state.entities.games.game.title}</h1> */}

                    {/* <h1 id="game-show-title">{game.name}</h1> */}
                    {/* <img src="" alt="game" id="game-photo" />
                    <h2 id="game-show-status">{currentGame.status}</h2>
                    <h2 id="game-show-num-players">{currentGame.numPlayers}</h2>
                    <h2 id="game-show-category">{currentGame.category}</h2>
                    <p id="game-show-description">{currentGame.description}</p>
                    <a id="game-show-rules" href="">{currentGame.rules}</a>
                    <h2 id="game-show-setting">{currentGame.setting}</h2> */}

                    <h1 id="game-show-title">{currentGame.name}</h1>
                    <img src="" alt={currentGame.image} id="game-img--show" />
                    {/* <h2 id="game-show-status">{game.status}</h2> */}
                    <h2 id="game-show-num-players">Players: {currentGame.playerCount?.min} - {currentGame.playerCount?.max}</h2>
                    <h2 id="game-show-category">Category: {currentGame.category}</h2>
                    <p id="game-show-description">{currentGame.description}</p>
                    <h2 id="game-show-setting">Setting: {currentGame.gameType}</h2>
                    
                    <div>
                        { 
                            (!this.props.currentUser.games?.includes(this.props.currentGame._id)) ?
                            <button onClick={() => this.addGameLibrary()}>Add Game to Library</button> : null
                        }
                    </div>

                    {/* <Link to={`/game/${game.id}/edit`}><button onClick={this.props.closeModal} id="edit-game">Edit Game</button></Link>
                    <button onClick={() => this.props.deleteGame(game.id)} id="delete-game">Delete Game</button> */}
                </div>
            </div>
        );
    }

}

export default GameShow;