import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from "react-router";
import NavBar from "../nav/navbar";
import LibraryItem from "../library/library_item"

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupGames: [],
      groupGameObjects: [],
      currentGroupUsers: [],
      userInGroup: null,
      groupInUser: null
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }
  
  componentDidMount() {

    this.props.fetchGroup(this.props.match.params.id)
    .then(() => this.props.fetchGroups()
    .then(() => this.props.fetchUsers())
    .then(() => this.props.fetchGames()))

    .then(() => {
      let groupGamesArray = [];
      this.props.currentGroup.users?.map(user => {
        let userGames = this.props.allUsers[user]?.games;
        groupGamesArray = groupGamesArray.concat(userGames)
      })
  
      let groupGamesSet = new Set(groupGamesArray);
      let groupGamesFinal = Array.from(groupGamesSet);  
      let groupGameObjects = [];
      groupGamesFinal.map(gameId => {
        let gameObject = this.props.allGames[gameId]
        groupGameObjects = groupGameObjects.concat(gameObject)
      })
      this.setState({groupGameObjects: groupGameObjects})

    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentGroup?.users?.length !== this.props.currentGroup?.users?.length) {
      this.props.fetchUsers()
    }
  }

  handleMouseEnter(e) {
    e.target.innerHTML = `${this.props.currentGroup.shareCode}`
  }
  
  handleMouseLeave(e) {
    e.target.innerHTML = "Share Code"
  }

  handleLeave(e){
    e.preventDefault();
    const updatedUser = {...this.props.currentUserObj};
    updatedUser.groups = updatedUser.groups.filter(group => group !== this.props.currentGroup._id);
 
    const updatedGroup = {...this.props.currentGroup};
    updatedGroup.users = updatedGroup.users.filter(user => user !== this.props.currentUserObj._id);
    this.props.updateUser(updatedUser)
      .then(() => this.setState({
        userInGroup: false
      }))
    this.props.updateGroup(updatedGroup)
      .then(() => this.setState({
        groupInUser: false
      }))
      .then(() => {
            this.props.history.push({pathname: '/groups'})
      })
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
            <div className="btn--leave-group" onClick={this.handleLeave}>Leave Group</div>
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
                    <LibraryItem id="group-lib-item" game={game} />
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

export default withRouter(GroupShow);

