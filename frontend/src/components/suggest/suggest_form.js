import React from 'react';


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
            gameType: this.state.gameType
        };
        let filteredGames = []
        
        const userPoolId = currentGroups[this.state.library]?.users //FINDS USERS IN SELECTED GROUP
        let gamePool = []
        debugger
        for (let i = 0; i < userPoolId.length; i++) {
            // const allUsers = this.props.allUsers
            // gamePool.push(...this.props.allUsers[userPoolId[i]].games);
            gamePool.push(allUsers[userPoolId[i]]?.games);
            gamePool = gamePool.concat(allUsers[userPoolId[i]]?.games)
        }
        for (let i = 0; i < gamePool.length; i++) {
            filteredGames.push(allGames[gamePool[i]])
        }

        const categoryFilter = (arr1, arr2) => {
            let count = arr2.length
            for (const ele of arr2) {
                if (arr1.includes(ele)) count -= 1
            }
            if (count <= 0) {
                return true
            } else {
                return false
            } 
        }

        filteredGames.filter((game) => {
            game?.playerCount.max >= preferences?.numPlayers && 
            game?.playerCount.min <= preferences?.numPlayers &&
            categoryFilter(game?.category, preferences?.category) &&
            preferences.gameType.includes(game.gameType)
        })

        this.setState({
            filteredGames: filteredGames
        })
        // this.props.filterGames(preferences) //THUNK ACTION TO QUERY/FILTER GAMES INDEX BY THESE COMPONENTS
        // Want to pass all games from library that user selected through the filter defined by form submitted by user
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
            <div>

                <div>
                    Suggest a Game
                </div>

                <form onSubmit={this.handleSubmit}>

                    {/* LIBRARY SELECTOR */}

                    <label>Find game from:
                        <select onChange={this.update("library")}>
                                <option selected disabled hidden></option>
                            {this.state.currentUserGroups.map((group, i) => {
                                return <option key={i} value={group._id}>{group.name}</option>
                        })}
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
                            <option value="12">12+</option>
                        </select>
                    </label>


                    {/* CATEGORY SELECTOR */}
                    <label>Pick a category!
                    

                            {categories.map((category) => (
                                <label>
                                    {category}
                                    <input type="checkbox" onChange = {(e) => this.categoryUpdate(e)} className='category-checkbox' value={category}/>
                                </label>
                            ))}

                        {/* </select> */}
                    </label>


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

                    {/* FORM SUBMIT */}
                    <input type="submit" value="Go Fish"/>
                    {this.renderErrors()}
                </form>


            </div>
        )
    }
}

export default SuggestForm