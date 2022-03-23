

`/validations/games` opted to comment out the validations at the category and game type on the backend.
  ```JS
    // if (!Validator.isLength(data.category.split(", ").length, { min: 1 })) {
    //   errors.category = 'Category cannot be empty';
    // }

    // if (!Validator.isLength(data.gameType.length, { min: 1 })) {
    //   errors.gameType = 'Game type cannot be empty';
    // }
  ```


`/models/Game` unique index needed

^ also groups


change "gameType" to "setting"

add game.status to display if the game is in a user's library

<!-- `/routes/users` when you create a user automatically add a set of free/online games
  - double check update user -->



`library` setState being called a number of times is slowing down the RECEIVE_USER call and 15s delay in rendering games on pg

& create game button doesn't work any more




[UNRESOLVED]

Background: 
- `Create Group` button renders a modal to `Create New Group` without leaving the page. (pics 1 & 2)
- `onSubmit` group successfully created, added to the backend as a new group with the user as a member, and added to the user as a group they belong to.  All works as intended.

Problem:
- On submit, the modal is closed and the user is shown the same group index page.  **The group does not display until refresh.** (pics 3 & 4)

What is the "right" way to force the original group index component to update if we use a modal and never leave the page?

I have only been able to do this with `this.forceUpdate()`, but this is highly discouraged in everything I've read.

Thank you!

---

[RESOVLED]

Solution required changes in (3) files.
1. `group_create_container` added `fetchGroups` to the `mDTP`
2. `group_create_form` added `.then(() => this.props.fetchGroups())` to the `handleSubmit` for both creating a group and joining a group.
3. `group_index` added a `componentDidUpdate()` method to compare the length of the all groups array between prev props and current props.
```JS
  componentDidUpdate(prevProps) {
    if (this.props.userGroups?.length !== prevProps.userGroups?.length) {
      this.setState({
        currentUserGroups: Object.values(this.props.userGroups).filter(group => group.users.includes(this.props.currentUser.id))
    })}
  }
```





