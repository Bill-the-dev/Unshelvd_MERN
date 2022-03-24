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
            <div className="game-show-container">
                {/* <div className='modal-close' onClick={this.props.closeModal}>✕</div> */}
                <div className="game-show-item">
                    
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
                    <img src={currentGame.image} alt={currentGame.image} id="game-img--show" />
                    {/* <h2 id="game-show-status">{game.status}</h2> */}
                    <div className="game-details">
                        <p id="game-show-description">{currentGame.description}</p>
                        <h2 id="game-show-num-players">Players: {currentGame.playerCount?.min} - {currentGame.playerCount?.max}</h2>
                        <h2 id="game-show-category">Category: {currentGame.category?.map((cat, i) => {
                            return (i === currentGame.category.length - 1) ? cat : cat + ", "
                        })}</h2>
                        <h2 id="game-show-setting">Setting: {currentGame.gameType}</h2>
                    </div>
                    {/* <div id="add-game-container">
                        { 
                            (!this.props.currentUser.games?.includes(this.props.currentGame._id)) ?
                                <button className="button button--add-game-to-library" onClick={() => this.addGameLibrary()}>Add Game to Library</button> 
                                : 
                                <button className="button button--add-game-to-library button--added-to-library">Added to Library</button>
                        }
                    </div> */}
                    


                    {/* fixthis w Ethans ^ */}
                    {/* <button id="button--add-game-to-library">
                        <Link to="/library">+Add To Library</Link>
                    </button> */}


                    {/* <Link to={`/game/${game.id}/edit`}><button onClick={this.props.closeModal} id="edit-game">Edit Game</button></Link>
                    <button onClick={() => this.props.deleteGame(game.id)} id="delete-game">Delete Game</button> */}
                </div>
            </div>
        );
    }

}

export default GameShow;