import React from 'react';
import LibraryItem from './library_item';
import { Link} from 'react-router-dom'


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserGames: [],
      gameObjects: [],
      currentUserId: this.props.sessionUser.id
    }
  }

  componentDidMount() {
    if (!this.props.currentUser._id){
      this.props.fetchUser(this.props.sessionUser.id)
    }
    this.props.fetchGames()
      .then(() => this.setState({currentUserGames: this.props.userGames}))
      .then(() => {
        let games = []
        this.props.allGames?.map(game => {
          if (this.state.currentUserGames.includes(game._id)){
            games.push(game)
          }
        })
      this.setState({gameObjects: games})
    })
  }
    
  render() {
    const {currentUser, userGames, fetchGames, fetchGame, createGame, fetchUserGames, openModal} = this.props
    if (!currentUser) {
      return null
    } 

    return(    
      <div className='library-container'>
        <h1 className="welcome-msg--library">{currentUser.username}'s Library</h1>

          <Link to="/newgame" className='button--add-game'>
            <button className='button'>Create Game</button>
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

