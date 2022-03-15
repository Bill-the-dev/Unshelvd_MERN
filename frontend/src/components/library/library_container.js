import {connect} from 'react-redux';
import {fetchAllGames, fetchGame, createGame} from '../../actions/game_actions';
import {fetchUserGames} from '../../actions/user_actions';
import Library from './library';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser, //Current user's games will be rendered in the library
    games: state.entities.games, //So that clicking on a game in library shows the game information (renders a game show/modal)
})


const mapDispatchToProps = dispatch => ({
    fetchAllGames: () => dispatch(fetchAllGames()),
    fetchGame: id => dispatch(fetchGame(id)),
    createGame: data => dispatch(createGame(data)),
    fetchUserGames: id => dispatch(fetchUserGames(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)











// create game container
mstp:     errors: state.errors.session

mdtp: createGame: data => dispatch(createGame(data))


// create game component

import React from 'react';

class CreateGameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            min: '', //playerCount.min: '' (?)
            max: '', //playerCount.max: '' (?)
            category: '',
            gameType: '',
            description: '',
            rulesLink: '',
            userCreator: '',
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let game = {
            name: this.state.name,
            image: this.state.image,
            min: this.state.min,
            max: this.state.max,
            category: this.state.category,
            gameType: this.state.gameType,
            description: this.state.description,
            rulesLink: this.state.rulesLink,
            userCreator: this.state.userCreator
        };
        this.props.createGame(game) //MIGHT NEED this.props.history PASSED IN ALSO
    }

    renderErrors() {
        return(
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render() {


        return (
            <div>
                
                <form onSubmit = {this.handleSubmit}>




                </form>

            </div>


        )
    }

}