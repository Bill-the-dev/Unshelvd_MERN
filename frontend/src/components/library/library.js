import React from 'react';
import LibraryItem from './library_item';



class Library extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchUser(this.props.sessionUser.id)
      .then(() => console.log(this.props))
      // .then((currentUser) => setState(currentUser.games));

    // this.props.fetchGame(this.props.match.params.id);
    // this.props.fetchUserLibrary();

  }  
    
    render() {
        const {currentUser, userGames, fetchGames, fetchGame, createGame, fetchUserGames, openModal} = this.props
        if (!userGames) return null;
        if (!currentUser) return null;
        debugger
        return(
          
          <div className='library-container'>
            <h1 className="welcome-msg--library">{currentUser.username}'s Library</h1>
            <button className='button--add-game'>+Add Game</button>
            <div className='library-index-container'>
              <ul className='library-index-list'>
                {
                  userGames.map(game => <LibraryItem currentUser={currentUser} openModal={ openModal } game={ game }  key={ game._id } />)
                }
              </ul>
            </div>
          </div>
        )
    }
}

export default Library;