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


    addGameLibrary() {
        let updatedUser = this.props.currentUser
        updatedUser.games = this.props.currentUser.games.concat(this.props.currentGame._id)
        this.props.updateUser(updatedUser)
        this.props.history.push({pathname: '/library'})
    }

    removeGameLibrary() {
        let updatedUser = this.props.currentUser
        updatedUser.games = this.props.currentUser.games.filter(game => game !== this.props.currentGame._id)
        this.props.updateUser(updatedUser)
        this.props.history.push({pathname: '/library'})
    }

    render() {
        const {currentGame} = this.props;
        if (!currentGame) return null;
    
        return (
            <div className="game-show-container">
              
                <div className="game-show-item">
           
                    <h1 id="game-show-title">{currentGame.name}</h1>
                    <img src={currentGame.image} alt={currentGame.image} id="game-img--show" />
               
                    <div className="game-details">
                        <p id="game-show-description">{currentGame.description}</p>
                        <h2 id="game-show-num-players">Players: {currentGame.playerCount?.min} - {currentGame.playerCount?.max}</h2>
                        <h2 id="game-show-category">Category: {currentGame.category?.map((cat, i) => {
                            return (i === currentGame.category.length - 1) ? cat : cat + ", "
                        })}</h2>
                        <h2 id="game-show-setting">Setting: {currentGame.gameType}</h2>
                    </div>
                    <div id="add-game-container">
                        { 
                            (!this.props.currentUser.games?.includes(this.props.currentGame._id)) ?
                                <button className="button button--add-game-to-library" onClick={() => this.addGameLibrary()}>Add Game to Library</button> 
                                : 
                                <button className="button button--add-game-to-library" onClick={() => this.removeGameLibrary()}>Remove Game from Library</button>
                        }
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default GameShow;