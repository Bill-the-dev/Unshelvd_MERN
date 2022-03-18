import React from 'react';
import LibraryItem from './library_item';
import { Link} from 'react-router-dom'



class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUserGames: [],
      gameObjects: []
    }
  }

  componentDidMount() {
    this.props.fetchGames()
    this.props.fetchUser(this.props.sessionUser.id)
    .then(() => console.log(this.props))
    .then(() => this.setState({currentUserGames: this.props.userGames}))
      .then(() => console.log(this.state))
      .then(() => {
        let games = []
        this.props.allGames?.map(game => {
          // debugger
          if (this.state.currentUserGames.includes(game._id)){
            // debugger
            games.push(game)
          }
        })
      this.setState({gameObjects: games})
      console.log(games)
      })

    // this.props.fetchUserLibrary(this.props.sessionUser.id);

  }  
    
    render() {
        const {currentUser, userGames, fetchGames, fetchGame, createGame, fetchUserGames, openModal} = this.props
        // if (!userGames) return null;
        if (!currentUser) return null;
        
        return(
          
          <div className='library-container'>
            <h1 className="welcome-msg--library">{currentUser.username}'s Library</h1>
            
            <Link to="/newgame" className='button--add-game'>
              <button>+Add Game</button>
            </Link>
            <div className='library-index-container'>
              <ul className='library-index-list'>
                {
                  this.state.gameObjects.map(game =>  <LibraryItem currentUser={currentUser} openModal={ openModal } game={ game }  key={ game._id } />)
                }
              </ul>
            </div>
          </div>
        )
    }
}

export default Library;