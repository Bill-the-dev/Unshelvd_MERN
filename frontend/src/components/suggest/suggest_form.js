import React from 'react';
import LibraryItem from '../library/library_item'

class SuggestForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUserGroups: [],
            library: '',
            numPlayers: '',
            category: [],
            gameType: [],
            errors: {},
            filteredGames: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false //DEPENDS IF ERRORS EVEN RENDER IN THIS FORM
        this.categoryUpdate = this.categoryUpdate.bind(this);
        this.typeUpdate = this.typeUpdate.bind(this);
    }


    componentDidMount(){
        this.props.fetchUser(this.props.sessionUser.id)
        this.props.fetchUsers()
        this.props.fetchGames()
        this.props.fetchGroups()
        .then(() => this.setState({currentUserGroups: Object.values(this.props.currentGroups).filter(group => group.users.includes(this.props.sessionUser.id))}))
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

    typeUpdate(e) {
        let selection = e.currentTarget
        let stateCopy = [...this.state.gameType]
        if (selection.checked) {
            this.setState({
                gameType: this.state.gameType.concat(selection.value)
            })
        } else {
            this.setState({
                gameType: stateCopy.filter(word => word !== selection.value)
            })
        }
    }


    handleSubmit(e) {
        const {allUsers, currentGroups, allGames} = this.props;

        e.preventDefault();
        let preferences = {
            library: this.state.library,
            numPlayers: this.state.numPlayers,
            category: this.state.category, //[App, Dice]
            gameType: this.state.gameType //[Unplugged, Connected]
        };
        let filteredGames = []
        
        const userPoolId = currentGroups[this.state.library]?.users //FINDS USERS IN SELECTED GROUP
        let gamePool = []
        // debugger
        for (let i = 0; i < userPoolId.length; i++) {
            // const allUsers = this.props.allUsers
            // gamePool.push(...this.props.allUsers[userPoolId[i]].games);
            // gamePool.push(allUsers[userPoolId[i]]?.games);
            gamePool = gamePool.concat(allUsers[userPoolId[i]]?.games)
        }
        const realGamePool = gamePool.filter(item => {
            if (item) return item
        })
        // debugger

        for (let i = 0; i < realGamePool.length; i++) {
            if (!filteredGames.includes(allGames[realGamePool[i]])) {
                filteredGames.push(allGames[realGamePool[i]])
            }
        }
        // debugger

        const categoryFilter = (game, player) => {
            for (const ele of player) {
                if (game.includes(ele)) return true
            }
            return false
        }

        const typeFilter = (game, player) => {
            for (const ele of player) {
                if (game.includes(ele)) return true
            }
            return false
        }

        let userFiltered = []

        filteredGames.forEach(game => {
            if ( 
                game?.playerCount.max >= parseInt(preferences?.numPlayers) && 
                game?.playerCount.min <= parseInt(preferences?.numPlayers) &&
                categoryFilter(game.category, preferences.category) &&
                typeFilter(game.gameType, preferences.gameType)
                ) userFiltered.push(game)
        })

    
        this.setState({
            filteredGames: userFiltered
        })
    }

    componentDidUpdate(prevState) {
        if (this.state.filteredGames !== prevState.filteredGames) {

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
        const categories = ["Board Game", "Playing Cards", "Dice", "Pen & Paper", "App", "Party", "Word", "Puzzle", "Quick", "Team Play", "Bluffing", "Deduction"]
        debugger
        return (
            <div className='suggest-form-container'>

                <div className='suggest-form-header'>
                    Suggest a Game
                </div>

                <form className='suggest-form' onSubmit={this.handleSubmit}>

                    {/* LIBRARY SELECTOR */}

                    <div className='suggest-form-library'>
                        <h2>Find game from:
                        <div>
                            <select onChange={this.update("library")}>
                                    <option selected disabled hidden></option>
                                {this.state.currentUserGroups.map((group, i) => {
                                    return <option key={i} value={group._id}>{group.name}</option>
                            })}
                            </select>
                        </div>
                        </h2>
                    </div>

                    {/* NUMBER OF PLAYERS SELECTOR */}
                    <div className='suggest-form-numplayers'>
                        <h2>Number of Players
                            <div>
                                <select onChange={this.update("numPlayers")}>
                                    <option selected disabled hidden></option>
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
                                    <option value="12">12+</option>
                                </select>
                            </div>
                        </h2>
                    </div>


                    {/* CATEGORY SELECTOR */}
                    <div className='suggest-form-category'>
                        
                        <h2>Pick a category!</h2>
                            <div className='category-grid'>
                                {categories.map((category) => (
                                    <label className='category-grid-item'>
                                        {category}
                                        <input type="checkbox" onChange = {(e) => this.categoryUpdate(e)} className='category-checkbox' value={category}/>
                                    </label>
                                ))}
                            </div>

                            {/* </select> */}
                    </div>


                    <div className='suggest-form-type'>
                        <h2>What setting are you playing in?</h2>
                        <div>
                            <label>
                                Unplugged
                                <input type="checkbox" onChange = {(e) => this.typeUpdate(e)} className='type-checkbox' value={"Unplugged"}></input>
                            </label>
                        
                            <label>
                                Connected
                                <input type="checkbox" onChange = {(e) => this.typeUpdate(e)} className='type-checkbox' value={"Connected"}></input>
                            </label>
                        </div>
                    </div>

                    {/* FORM SUBMIT */}
                    <div className='suggest-form-submit'>
                        <input type="submit" value="Go Fish"/>
                        {this.renderErrors()}
                    </div>


                </form>


                <div className='suggest-results'>
                {
                    (this.state.filteredGames) ?
                    <div>
                        <ul>
                        {this.state.filteredGames.map((game) => {
                            return(
                            <li>
                                <LibraryItem game={game}/>
                            </li>
                            )
                        })}
                        </ul>
                    </div> 
                    : null
                }
                </div>

            </div>
        )
    }
}

export default SuggestForm