import React from "react";
import { closeModal } from "../../actions/modal_actions";

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
      })
      .then(() => this.props.fetchGroups())
      .then(() => this.props.closeModal())
    } else {
      // JOIN GROUP
        let curGroup;
        this.props.allGroups.forEach(group => {
          if (group.shareCode === this.state.code) {
            // debugger
            curGroup = group
          }
        })
        // if (!curGroup) {
        //   this.renderErrors()
        //   return
        // }
      // ADD GROUP TO USER
      const updatedUser = {...this.props.currentUser};
      // debugger
      if (!updatedUser.groups.includes(curGroup._id)){
        // debugger
          updatedUser.groups = updatedUser.groups.concat(curGroup._id);
          // debugger
          
          // ADD USER TO GROUP
          const updatedGroup = {...curGroup};
          // debugger
          updatedGroup.users = curGroup.users.concat(this.props.currentUser._id);
          // debugger
          this.props.updateUser(updatedUser);
          this.props.updateGroup(updatedGroup)
          // .then(group => this.props.fetchGroup(group._id))
          // .then(() => this.props.fetchGroups())
        }
        this.props.closeModal()
          // .then(() => {
          //   debugger
          //   this.props.history.push({pathname: `/groups/${curGroup._id}`})
          // })
        setTimeout(this.props.history.push({pathname: `/groups/${curGroup._id}`}),1000)
    }
  }

  render() {
    let groupErrors = this.props.errors
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
            {/* {groupErrors} */}
            <input className="group-form-submit" type='submit' value='Join Group'/>
        </form>
      </div>
        }
      </div>
    )
  }
}

export default CreateGroup