import React from "react";
import { Link } from "react-router-dom";

class GameShow extends React.Component {
    constructor(props) {
        super(props);

       
    }

    componentDidMount() {
        this.props.fetchGames();
        this.props.fetchGame(this.props.match.params.id);
    }

    // componentDidUpdate(prevProps){
        
    //     if (prevProps.game !== this.props.game){
    //         this.props.fetchGame(this.props.match.params.id);
    //     }
    // }

    render() {
        // let currentGame;
        // for (let game of this.props.games) {
        //     if (this.props.gameId === game.id) {
        //         currentGame = game;
        //     }
        // }
        const {game} = this.props;
        if (!game) return null;
    
        return (
            <div>
                {/* <div className='modal-close' onClick={this.props.closeModal}>✕</div> */}
                <div className="game-show-item">
                    <h1>Test Item</h1>
                    
                    {/* <h1 id="game-show-title">{this.state.entities.games.game.title}</h1> */}

                    <h1 id="game-show-title">{game.name}</h1>
                    {/* <img src="" alt="game" id="game-photo" />
                    <h2 id="game-show-status">{currentGame.status}</h2>
                    <h2 id="game-show-num-players">{currentGame.numPlayers}</h2>
                    <h2 id="game-show-category">{currentGame.category}</h2>
                    <p id="game-show-description">{currentGame.description}</p>
                    <a id="game-show-rules" href="">{currentGame.rules}</a>
                    <h2 id="game-show-setting">{currentGame.setting}</h2> */}

                    {/* <Link to={`/game/${currentGame.id}/edit`}><button onClick={this.props.closeModal} id="edit-game">Edit Game</button></Link>
                    <button onClick={() => this.props.deleteGame(currentGame.id)} id="delete-game">Delete Game</button> */}
                </div>
            </div>
        );
    }

}

export default GameShow;