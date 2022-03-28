import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/navbar";
import LibraryItem from "../library/library_item"

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupGames: [],
      groupGameObjects: []
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id)
    .then(() => this.props.fetchGroups()
    .then(() => this.props.fetchUsers())
    .then(() => this.props.fetchGames()))
      .then(() => {
        let groupGamesArr = []
        // debugger
        this.props.currentGroup.users?.map((user) => {
          let userGames = this.props.allUsers[user]?.games
          groupGamesArr = groupGamesArr.concat(userGames)
          // console.log(groupGamesArr)
          // debugger
        })
        // prevent dups
        let groupGamesSet = new Set(groupGamesArr);
        let groupGamesRes = Array.from(groupGamesSet);
        // console.log(`this is groupGameRes: ${groupGamesRes}`);
        this.setState({groupGames: groupGamesRes})
      })
      .then(() => {
        let gameObjectsArr = []
        this.state.groupGames?.map((gameId) =>{
          let gameObject = this.props?.allGames[gameId]
          gameObjectsArr.push(gameObject)
          // console.log(gameObjectsArr)
        })
        this.setState({groupGameObjects: gameObjectsArr})
        // console.log(this.state)
      })
    }

  handleMouseEnter(e) {
    e.target.innerHTML = `${this.props.currentGroup.shareCode}`
  }
  
  handleMouseLeave(e) {
    e.target.innerHTML = "Share Code"
  }
  
  render () {
    const { currentGroup, allUsers, allGames, userGroups } = this.props;
    if (!currentGroup) return null
    if (!allUsers) return null
    if (!allGames) return null


    return(
      <div className="group-show-container">
        <div className="gs-sub-header">
          <h1>{currentGroup.name}</h1>
          <div 
            className="btn--share-group" 
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave}
          >Share Code</div>
        </div>
        <div className="gs-content">
          <div className="gs-user-list-container">
            <h2>Group Members</h2>
            <ul>
              { 
              currentGroup.users?.map((user, index) => {
                let listUsername = allUsers[user]?.username;
                return <li className="gs-user-li" key={user.id}>{`${index+1} - ${listUsername}`}</li>})
              }
            </ul>
          </div>
          <div className="gs-games-container">
            <ul className="gs-games-list">
              {
              (this.state.groupGameObjects)
              ? this.state.groupGameObjects?.map((game) => {
                  return (
                  <li>
                    <LibraryItem id="group-lib-item" game={game} key={game._id} />
                  </li>
                  )
                })
              : <li>
                  <p>Loading Tile</p>
                </li>
              }

            </ul> 
          </div>            
        </div>
      </div>
    )
  }
}

export default GroupShow;

