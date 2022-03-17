import React from "react";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
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
    submitGroup()
      .then(group => {
        const updatedUser = this.props.currentUser;
        // debugger
        updatedUser.groups = this.props.currentUser.groups.concat(group.group.data._id);
        this.props.updateUser(updatedUser);
        // this.props.history.push({pathname: `/groups/${group.group.data._id}`})
        this.props.history.push({pathname: `/groups`})
      })
  }

  render() {
    let groupErrors = this.props.errors
    return (
      <div>
        <h1>Create a New Group</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Name:
                <input type='text' value={this.state.name} onChange={this.update('name')}/>
            </label>
            <input type='submit' value='Create Group'/>
        </form>
      </div>
    )
  }
}

export default CreateGroup