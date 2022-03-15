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
            category: this.state.category, //require select one overall then optional multi select categories
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

export default CreateGameForm;