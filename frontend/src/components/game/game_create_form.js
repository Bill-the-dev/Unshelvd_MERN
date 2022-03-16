// create game component

import React from 'react';

class CreateGameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: 'xx',
            min: 1, //playerCount.min: '' (?)
            max: 1000, //playerCount.max: '' (?)
            category: [],
            descriptors: [],
            gameType: [],
            description: '',
            rulesLink: '',
            userCreator: props.currentUser,
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
        const curStateVals = this.state[field]
        
        return e => curStateVals.includes(e.currentTarget.value) ?
            this.setState({[field]: curStateVals.filter(val => val !== e.currentTarget.value)})
            : this.setState({[field]: curStateVals.concat(e.currentTarget.value)})
    }

    handleSubmit(e) {
        e.preventDefault();
        let game = {
            name: this.state.name,
            image: this.state.image,
            min: parseInt(this.state.min),
            max: parseInt(this.state.max),
            category: this.state.category.concat(this.state.descriptors), //require select one overall then optional multi select categories
            gameType: this.state.gameType,
            description: this.state.description,
            rulesLink: this.state.rulesLink,
            userCreator: this.state.userCreator
        };

        let submitGame = async () => this.props.createGame(game);
        debugger
        if (this.state.category.length === 0) {
            console.log('category blank');
            return;
        } else if (this.state.gameType.length === 0) {
            console.log('game type blank');
            return;
        } else {
            submitGame()
                .then(game => {

                    this.props.history.push({pathname: `/library`})
                })
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

        return (
            <div className='new-game-form-container'>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>Name: 
                            <input type='text' value={this.state.name} onChange={this.update('name')}/>
                        </label>
                    </div>
                    <div>Number of Players (leave blank if no restriction):
                        <label>Min 
                            <input type='number' onChange={this.update('min')}/>
                        </label>
                        <label>Max 
                            <input type='number' onChange={this.update('max')}/>
                        </label>
                    </div>
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
                            <input type='checkbox' name='descriptors' value='Party' onClick={this.updateSelect('descriptors')}/>
                        </label>
                        <br/>
                        <label>Word
                            <input type='checkbox' name='descriptors' value='Word' onClick={this.updateSelect('descriptors')}/>
                        </label>
                        <br/>
                        <label>Puzzle
                            <input type='checkbox' name='descriptors' value='Puzzle' onClick={this.updateSelect('descriptors')}/>
                        </label>
                        <br/>
                        <label>Quick
                            <input type='checkbox' name='descriptors' value='Quick' onClick={this.updateSelect('descriptors')}/>
                        </label>
                        <br/>
                        <label>Team Play
                            <input type='checkbox' name='descriptors' value='Team Play' onClick={this.updateSelect('descriptors')}/>
                        </label>
                        <br/>
                        <label>Bluffing
                            <input type='checkbox' name='descriptors' value='Bluffing' onClick={this.updateSelect('descriptors')}/>
                        </label>
                        <br/>
                        <label>Deduction
                            <input type='checkbox' name='descriptors' value='Deduction' onClick={this.updateSelect('descriptors')}/>
                        </label>
                        <br/>
                    </div>
                    <div>
                        <h2>Select ??:</h2>
                        <label>Connected (online)
                            <input type='checkbox' name='gameType' value='Connected' onClick={this.updateSelect('gameType')}/>
                        </label>
                        <br/>
                        <label>Unplugged (in person)
                            <input type='checkbox' name='gameType' value='Unplugged' onClick={this.updateSelect('gameType')}/>
                        </label>
                        <br/>
                    </div>
                    <div>
                        <label>Description:
                            <textarea placeholder='Include link to play online if applicable' onChange={this.update('description')}/>
                        </label>
                    </div>
                    <div>
                        <label>Link to Rules:
                            <input type='text' onChange={this.update('rulesLink')}/>
                        </label>
                    </div>
                    <div>
                        <input type='submit' value='Create Game'/>
                    </div>


                </form>

            </div>


        )
    }

}

export default CreateGameForm;