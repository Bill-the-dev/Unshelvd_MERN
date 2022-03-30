import React from "react";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      code: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    
    let submitGroup = async() => this.props.createGroup(this.state)
    if (this.props.modal === 'addGroup') {
      // CREATE NEW GROUP
      submitGroup()
      .then(group => {
        const updatedUser = this.props.currentUser;
        updatedUser.groups = updatedUser.groups.concat(group.group.data._id);
        this.props.updateUser(updatedUser);
        this.props.closeModal()
        this.props.history.push({pathname: `/groups/${group.group.data._id}`})
      })
    } else {
      // JOIN GROUP
        let curGroup;
        this.props.allGroups.forEach(group => {
          if (group.shareCode === this.state.code) {
            curGroup = group
          }
        })
        if (!curGroup) {
          this.setState({
            errors: "Group does not exist"
          })
        } else {
          // ADD GROUP TO USER
          const updatedUser = {...this.props.currentUser};
          if (!updatedUser.groups.includes(curGroup._id)){
              updatedUser.groups = updatedUser.groups.concat(curGroup._id);
              
              // ADD USER TO GROUP
              const updatedGroup = {...curGroup};
              updatedGroup.users = curGroup.users.concat(this.props.currentUser._id);
              this.props.updateUser(updatedUser);
              this.props.updateGroup(updatedGroup)
                .then(() => {
                  this.props.closeModal()
                  this.props.history.push({pathname: `/groups/${curGroup._id}`})
                })
            } else {
              this.props.closeModal()
              this.props.history.push({pathname: `/groups/${curGroup._id}`})
            }
        }
    }
  }

  render() {
    const {modal} = this.props
    return (
      <div className="group-form-container">
        {modal === 'addGroup' ? 
        <div className="group-form">
          <h1>Create a New Group</h1>
          <form onSubmit={this.handleSubmit}>
              <label>Name:
                  <input type='text' value={this.state.name} onChange={this.update('name')}/>
              </label>
              <input className="group-form-submit" type='submit' value='Create Group'/>
          </form>
        </div>
        :
        <div className="group-form">
        <h1>Join a Group</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Enter Code:
                <input type='text' value={this.state.code} onChange={this.update('code')}/>
            </label>
            <input className="group-form-submit" type='submit' value='Join Group'/>
            {
            this.state.errors ? 
            <div className="join-group-errors">{this.state.errors}</div> :
            null
            }
        </form>
      </div>
        }
      </div>
    )
  }
}

export default CreateGroup