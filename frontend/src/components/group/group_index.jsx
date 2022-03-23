import React from "react";
import { Link } from "react-router-dom";

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserGroups: []
    }
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id)
      .then(() => console.log(this.props));
    this.props.fetchGroups()
      .then(() => this.setState({ currentUserGroups: Object.values(this.props.userGroups).filter(group => group.users.includes(this.props.currentUser.id)) }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.userGroups?.length !== prevProps.userGroups?.length) {
      this.setState({
        currentUserGroups: Object.values(this.props.userGroups).filter(group => group.users.includes(this.props.currentUser.id))
    })}
  }

  render() {
    const {currentUser, userGroups, openModal} = this.props;
    if (!userGroups) return null;
    if (!currentUser) return null;
    
    return (
      <div className="group-index-container">
        <div className="gi-sub-header">
          <h1>Your Groups</h1>
          <div className="gi-buttons">
            
            {/* Possibly add key to the button based on current user groups length? key forces render */}
            <div className="btn btn--create-group" onClick={() => openModal('addGroup')}>Create Group</div> 

            <div className="btn btn--join-group" onClick={() => openModal('joinGroup')}>Join Group</div>

          </div>
        </div>
        <div className="gi-content">
          <div className="gi-groups-container">
            <ul className="gi-group-list">
              { 

                (this.state.currentUserGroups?.length > 0)
                ? this.state.currentUserGroups?.map((group, index) => {
                    return ( 
                      (currentUser.id === group.userGroupCreator) 
                        ? <Link id="gi-group-link" to={`/groups/${group._id}`}><li className="gi-group-item" key={group.id} >
                            <p className="gi-group-name">{group.name}</p>
                            <p className="gi-group-total">{`${group.users.length} members`}</p>
                            <p className="gi-group-founder">Founder</p>
                        </li></Link>
                        : <Link id="gi-group-link" to={`/groups/${group._id}`}> <li className="gi-group-item" key={group.id}>
                          <p className="gi-group-name">{group.name}</p>
                          <p className="gi-group-total">{`${group.users.length} members`}</p>
                          <p className="gi-group-member">Member</p>
                        </li></Link>
                      )
                  })
                : 
                  <div className="gi-empty">
                    <span className="gi-empty__text">Looks like you don't have any groups yet!</span>
                    <span className="gi-empty__text">Groups you've Joined or Created will all show here.</span>
                  </div>

                
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupIndex;