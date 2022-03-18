import React from "react";
import { Link } from "react-router-dom";
// import GroupIndexItem from "../game/game_show";

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.id)
      .then(() => console.log(this.props));
    this.props.fetchGroups()
      .then(() => console.log(this.props))
  }

  handleClick() {

  }

  render() {
    const {currentUser, userGroups, openModal} = this.props;
    if (!userGroups) return null;
    if (!currentUser) return null;

    return (
      <div className="group-index-container">
        <div className="gi-sub-header">
          <h1>Your Groups</h1>
          <div className="btn btn--create-group" onClick={() => openModal('addGroup')}>Create Group</div>          
          <div className="btn btn--join-group" onClick={() => openModal('joinGroup')}>Join Group</div>          
        </div>
        <div className="gi-content">
          <div className="gi-groups-container">
            <ul className="gi-group-list">

              {
                userGroups?.map((group, index) => {
                  return ( 
                    (currentUser.id === group.userGroupCreator) 
                      ? <Link to={`/groups/${group._id}`}><li className="gi-group-item" key={group.id} >
                          <p className="gi-group-name">{group.name}</p>
                          <p className="gi-group-total">{`${group.users.length} members`}</p>
                          <p className="gi-group-founder">Founder</p>
                      </li></Link>
                      : <Link to={`/groups/${group._id}`}> <li className="gi-group-item" key={group.id}>
                        <p className="gi-group-name">{group.name}</p>
                        <p className="gi-group-total">{`${group.users.length} members`}</p>
                        <p className="gi-group-member">Member</p>
                      </li></Link>
                    )
                })
              }
              <li className="gi-group-item">Group 1</li>  
              <li className="gi-group-item">Group 2</li>  
              <li className="gi-group-item">Group 3</li>  
              <li className="gi-group-item">Group 4</li>  
              <li className="gi-group-item">Group 5</li>  
              <li className="gi-group-item">Group 6</li>  
            </ul>
          </div>
        </div>
        {/* <ul className="group-games-index">
          {
            // groups.map(group =>
            //    <GroupIndexItem key={group.id} />)  ///this is group show???! No such GroupIndexItem?
          }
        </ul> */}
      </div>
    );
  }

}

export default GroupIndex;