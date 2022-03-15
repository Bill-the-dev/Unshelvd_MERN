import React from 'react';


class SuggestForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            library: '',
            numPlayers: '',
            category: '',
            gameType: '',
            currentUserGroups: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this) 
        this.clearedErrors = false //DEPENDS IF ERRORS EVEN RENDER IN THIS FORM
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

        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <select>
                    {this.props.currentGroups.map((group, i) => (
                        <option key={i} value={group.id}>{group.name}</option>
                    ))}
                </select>

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

                <input type="submit">Go Fish</input>

                </form>


            </div>
        )
    }
}