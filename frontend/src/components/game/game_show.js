import React from "react";
import { Link } from "react-router-dom";

class GameShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGame(this.props.gameId); //fetch?????
    }

    render() {
        let currentGame;
        for (let game of this.props.games) {
            if (this.props.gameId === game.id) {
                currentGame = game;
            }
        }
    
        return (
            <div>
                <div className='modal-close' onClick={this.props.closeModal}>✕</div>
                <div className="game-show-item">
                    <h1 id="game-show-title">{currentGame.title}</h1>
                    <img src="" alt="game-picture" id="game-photo" />
                    <h2 id="game-show-status">{currentGame.status}</h2>
                    <h2 id="game-show-num-players">{currentGame.numPlayers}</h2>
                    <h2 id="game-show-category">{currentGame.category}</h2>
                    <p id="game-show-description">{currentGame.description}</p>
                    <a id="game-show-rules" href="">{currentGame.rules}</a>
                    <h2 id="game-show-setting">{currentGame.setting}</h2>

                    {/* <Link to={`/game/${currentGame.id}/edit`}><button onClick={this.props.closeModal} id="edit-game">Edit Game</button></Link>
                    <button onClick={() => this.props.deleteGame(currentGame.id)} id="delete-game">Delete Game</button> */}
                </div>
            </div>
        );
    }

}

export default GameShow;