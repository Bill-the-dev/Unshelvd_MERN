import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/navbar";
import LibraryItem from "../library/library_item"

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupGames: [],
      groupGameObjects: [],
      currentGroupUsers: []
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }
  
  componentDidMount() {
    // debugger

    this.props.fetchGroup(this.props.match.params.id)
    .then(() => this.props.fetchGroups()
    .then(() => this.props.fetchUsers())
    .then(() => this.props.fetchGames()))

    .then(() => {
      let groupGamesArray = [];
      this.props.currentGroup.users?.map(user => {
        let userGames = this.props.allUsers[user]?.games;
        groupGamesArray = groupGamesArray.concat(userGames)
        // console.log(groupGamesArray)
      })
  
      let groupGamesSet = new Set(groupGamesArray);
      let groupGamesFinal = Array.from(groupGamesSet);
      // console.log(groupGamesFinal);
  
      let groupGameObjects = [];
      groupGamesFinal.map(gameId => {
        let gameObject = this.props.allGames[gameId]
        groupGameObjects = groupGameObjects.concat(gameObject)
      })
      // console.log(groupGameObjects)
      this.setState({groupGameObjects: groupGameObjects})

    })
  }

  componentDidUpdate(prevProps) {
    // debugger;
    // if (prevProps.currentGroup.users !== this.props.currentGroup.user) {
    //   this.setState({
    //     currentGroupUsers: this.props.currentGroup.users
    //   });
    // }
  }

  handleMouseEnter(e) {
    e.target.innerHTML = `${this.props.currentGroup.shareCode}`
  }
  
  handleMouseLeave(e) {
    e.target.innerHTML = "Share Code"
  }

  handleLeave(e){
    // e.preventDefault();
    // debugger
    const updatedUser = {...this.props.currentUserObj};
    updatedUser.groups = updatedUser.groups.filter(group => group !== this.props.currentGroup._id);
    // debugger

    
    const updatedGroup = {...this.props.currentGroup};
    updatedGroup.users = updatedGroup.users.filter(user => user !== this.props.currentUserObj._id);
    // debugger
    this.props.updateUser(updatedUser)
    this.props.updateGroup(updatedGroup)
      // .then(() => this.props.fetchGroups())
      // .then(() => {
      //   debugger
      //   this.props.history.push({pathname: '/groups'})
      // })
    setTimeout(this.props.history.push({pathname:"/groups"}), 5000);
  }
  
  render () {
    const { currentGroup, allUsers, allGames, userGroups } = this.props;
    if (!currentGroup) return null
    if (!allUsers) return null
    if (!allGames) return null

    debugger

    return(
      <div className="group-show-container">
        <div className="gs-sub-header">
          <h1>{currentGroup.name}</h1>
          <div className="btn--leave-group" onClick={this.handleLeave}>Leave Group</div>
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
                    <LibraryItem id="group-lib-item" game={game} 
                                  // key={game._id} 
                                  />
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

