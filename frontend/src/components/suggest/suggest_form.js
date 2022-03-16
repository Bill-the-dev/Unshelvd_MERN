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
        // this.include = this.include.bind(this);
        this.categoryUpdate = this.categoryUpdate.bind(this)
    }


    componentDidMount(){
        this.props.fetchUser(this.props.sessionUser.id)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    categoryUpdate(e) {
        let selection = e.currentTarget
        let stateCopy = [...this.state.category]

        if (selection.checked) {
            this.setState({
                category: this.state.category.concat(selection.value)
            })
        } else {
            this.setState({
                category: stateCopy.filter(word => word !== selection.value)
            })
        }
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
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12   ">12+</option>
                        </select>
                    </label>


                    {/* CATEGORY SELECTOR */}
                    <label>Pick a category!
                    

                            {categories.map((category, i) => (
                                <label>
                                    {category}
                                    <input type="checkbox" id={category} onChange = {(e) => this.categoryUpdate(e)} className='category-checkbox' value={category}/>
                                </label>
                            ))}

                        {/* </select> */}
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