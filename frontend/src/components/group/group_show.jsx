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
      currentGroupUsers: []
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

  componentDidUpdate(prevProps) {
    debugger;
    if (this.props.currentGroup.users !== prevProps.currentGroup.users) {
      this.setState({
        currentGroupUsers: this.props.currentGroup.users
      });
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

    const updatedUser = this.props.currentUserObj;
    debugger
    updatedUser.groups = this.props.currentUserObj.groups.filter(group => group !== this.props.currentGroup._id);
    this.props.updateUser(updatedUser);

    const updatedGroup = this.props.currentGroup;
    updatedGroup.users = this.props.currentGroup.users.filter(user => user !== this.props.currentUserObj._id);
    this.props.updateGroup(updatedGroup)
      .then(() => this.props.fetchGroups())
      // .then(() => this.props.history.push({pathname:"/groups"}))
    setTimeout(this.props.history.push({pathname:"/groups"}), 1000);
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

export default withRouter(GroupShow);

