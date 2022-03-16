import React from 'react';


class SuggestForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            library: '',
            numPlayers: '',
            category: [],
            gameType: '',
            errors: {},
            filteredGames: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this) 
        this.clearedErrors = false //DEPENDS IF ERRORS EVEN RENDER IN THIS FORM
    }


    componentDidMount(){
        this.props.fetchUser(this.props.sessionUser.id)
    }

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
        // this.props.filterGames(preferences) //THUNK ACTION TO QUERY/FILTER GAMES INDEX BY THESE COMPONENTS
        // Want to pass all games from library that user selected through the filter defined by form submitted by user
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
        const categories = ["Board Game", "Playing Cards", "Dice", "Pen & Paper", "App", "Party", "Word", "Puzzle", "Quick", "Team Play", "Bluffing", "Deduction"]

        return (
            <div>

                <div>
                    Suggest a Game
                </div>

                <form onSubmit={this.handleSubmit}>

                    {/* LIBRARY SELECTOR */}

                    <label>Find game from:
                        <select onChange={this.update("library")}>
                            {this.props.currentUser.groups?.map((group, i) => (
                                <option key={i} value={group.id}>{group.name}</option>
                            ))}
                        </select>
                    </label>

                    {/* NUMBER OF PLAYERS SELECTOR */}
                    <label>Number of Players
                        <select onChange={this.update("numPlayers")}>
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
                        <select multiple onChange={this.update("category")}>
                            {/* {categories.overall.map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                                // <input key={i} type="checkbox" value={category}>{category}</input>
                            ))}
                            {categories.descriptors.map((category, i) => (
                                // <input key={i} type="checkbox" value={category}>{category}</input>
                                <option key={i} value={category}>{category}</option>
                            ))} */}

                            {categories.map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                            ))}

                        </select>
                    </label>


                    <div>
                        <button>Unplugged</button>
                        <button>Connected</button>
                    </div>

                    {/* FORM SUBMIT */}
                    <input type="submit" value="Go Fish"/>
                    {this.renderErrors()}
                </form>


            </div>
        )
    }
}

export default SuggestForm