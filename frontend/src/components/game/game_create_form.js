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
            category: [],
            gameType: [],
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

    updateSelect(field) {
        // debugger
        const curStateVal = this.state[field]
        return e => this.setState({
            [field]: curStateVal.concat(e.currentTarget.value)
        })
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
        if (game.category.length === 0) {
            console.log('category blank')
        } else {
            this.props.createGame(game) //MIGHT NEED this.props.history PASSED IN ALSO=
        }
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

        // Board Game, Playing Cards, Dice, Pen & Paper, App (phone)
        // Party, Word, Puzzle, Quick, Team Play, Bluffing, Deduction
        return (
            <div className='new-game-form-container'>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <h2>Select all categories that apply:</h2>
                        <label>Board Game
                            <input type='checkbox' name='category' value='Board Game' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Playing Cards
                            <input type='checkbox' name='category' value='Playing Cards' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Dice
                            <input type='checkbox' name='category' value='Dice' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Pen and Paper
                            <input type='checkbox' name='category' value='Pen and Paper' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>App
                            <input type='checkbox' name='category' value='App' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                    </div>
                    <div>
                        <h2>Select additional descriptors:</h2>
                        <label>Party
                            <input type='checkbox' name='category' value='Party' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Word
                            <input type='checkbox' name='category' value='Word' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Puzzle
                            <input type='checkbox' name='category' value='Puzzle' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Quick
                            <input type='checkbox' name='category' value='Quick' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Team Play
                            <input type='checkbox' name='category' value='Team Play' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Bluffing
                            <input type='checkbox' name='category' value='Bluffing' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                        <label>Deduction
                            <input type='checkbox' name='category' value='Deduction' onClick={this.updateSelect('category')}/>
                        </label>
                        <br/>
                    </div>



                </form>

            </div>


        )
    }

}

export default CreateGameForm;