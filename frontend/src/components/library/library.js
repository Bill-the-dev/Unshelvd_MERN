import React from 'react';


class Library extends React.Component {

    
    render() {
        
        const {currentUser, games, fetchAllGames, fetchGame, createGame, fetchUserGames} = this.props

        return(
            <div>
                <h1>Library</h1>
            </div>
        )
    }
}

export default Library;