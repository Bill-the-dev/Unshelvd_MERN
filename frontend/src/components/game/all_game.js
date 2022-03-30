import React from "react";
import GameItem from "./game_item";
import {Link} from 'react-router-dom'

class AllGameIndex extends React.Component {
  componentDidMount() {
    this.props.fetchGames()
  }

  render () {
    const {allGames, currentUser, openModal} = this.props
    return(
      <div className="library-container">
        <h1 className="welcome-msg--library">All Unshelvd Games</h1>
        <Link to="/newgame" className='button button--add-game'>
              <button>Create Game</button>
        </Link>
        <div className="library-index-container">
          <ul className='library-index-list'>
            {
              allGames.map(game => <GameItem key={game._id} game={game} currentUser={currentUser} openModal={openModal}/>)
            }
          </ul>
        </div>
      </div>  
    )
  }
}

export default AllGameIndex