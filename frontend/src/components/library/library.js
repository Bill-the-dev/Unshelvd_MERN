import React from 'react';


class Library extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchGame(this.props.match.params.id);
  }  
    
    render() {
        const {currentUser, userGames, fetchGames, fetchGame, createGame, fetchUserGames} = this.props
        if (!userGames) return null;

        return(
          <div>
            <h1>Library</h1>
            <div className='library-index'>
              <ul className='library-index'>
                {
                  userGames.map(game => <LibraryItem openModal= { openModal } game = { game }  key = { game.id } />)
                }
              </ul>
            </div>
          </div>
        )
    }
}

export default Library;