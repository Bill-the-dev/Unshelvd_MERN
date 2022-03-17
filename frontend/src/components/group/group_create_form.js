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
    // debugger
    let submitGroup = async() => this.props.createGroup(this.state)
    if (this.props.modal === 'addGroup') {
      submitGroup()
        .then(group => {
          const updatedUser = this.props.currentUser;
          // debugger
          updatedUser.groups = this.props.currentUser.groups.concat(group.group.data._id);
          this.props.updateUser(updatedUser);
          // this.props.history.push({pathname: `/groups/${group.group.data._id}`})
          // this.props.history.push({pathname: `/groups`})
        })
        .then(() => this.props.closeModal())
    } else {
      let curGroup;
      this.props.allGroups.forEach(group => {
        if (group.shareCode === this.state.code) {
          curGroup = group
        }
      })
      // debugger
      const updatedUser = this.props.currentUser;
      updatedUser.groups = this.props.currentUser.groups.concat(curGroup);
      this.props.updateUser(updatedUser);
      this.props.closeModal()
    }
  }

  render() {
    let groupErrors = this.props.errors
    const {modal} = this.props
    return (
      <div>
        {modal === 'addGroup' ? 
        <div>
          <h1>Create a New Group</h1>
          <form onSubmit={this.handleSubmit}>
              <label>Name:
                  <input type='text' value={this.state.name} onChange={this.update('name')}/>
              </label>
              <input type='submit' value='Create Group'/>
          </form>
        </div>
        :
        <div>
        <h1>Join a Group</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Enter Code:
                <input type='text' value={this.state.code} onChange={this.update('code')}/>
            </label>
            <input type='submit' value='Join Group'/>
        </form>
      </div>
        }
      </div>
    )
  }
}

export default CreateGroup