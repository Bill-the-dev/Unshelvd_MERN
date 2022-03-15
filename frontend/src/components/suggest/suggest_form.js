import React from 'react';


class SuggestForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            library: '',
            numPlayers: '',
            category: '',
            gameType: '',
            currentUserGroups: this.props.currentUser.groups
        }

        this.handleSubmit = this.handleSubmit.bind(this) 
        this.clearedErrors = false //DEPENDS IF ERRORS EVEN RENDER IN THIS FORM
    }


    componentDidMount()

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let preferences = {
            library: this.state.library,
            numPlayers: this.state.numPlayers,
            category: this.state.category,
            gameType: this.state.gameType
        };
        this.props.filterGames(preferences) //THUNK ACTION TO QUERY/FILTER GAMES INDEX BY THESE COMPONENTS
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

        const categories = {
            overall: [board, game, card, dice, penpaper, app],
            descriptors: [party, word, puzzle, quick, team, bluff, deduction]
        }

        return (
            <div>

                <div>
                    Suggest a Game
                </div>

                <form onSubmit={this.handleSubmit}>

                    {/* LIBRARY SELECTOR */}
                    <label>Find game from:
                        <select>
                            {this.store.currentUserGroups.map((group, i) => (
                                <option key={i} value={group.id}>{group.name}</option>
                            ))}
                        </select>
                    </label>

                    {/* NUMBER OF PLAYERS SELECTOR */}
                    <label>Number of Players
                        <select>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12+</option>
                        </select>
                    </label>


                    {/* CATEGORY SELECTOR */}
                    <label>Pick a category!
                        <select multiple>
                            {categories.overall.map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                            ))}
                            {categories.descriptors.map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                            ))}
                        </select>
                    </label>


                    <div>
                        <button>Unplugged</button>
                        <button>Connected</button>
                    </div>

                    {/* FORM SUBMIT */}
                    <input type="submit">Go Fish</input>

                </form>


            </div>
        )
    }
}

export default SuggestForm