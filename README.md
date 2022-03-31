# Unshelvd
[Link to Live Site](https://unshelvd-1.herokuapp.com/#/)

## Background and Overview
“I dunno, what do you want to do?”  Friends are no fun with open-ended questions. Unshelvd is here to fix that.

Unshelvd is a social gaming site that does away with uncertainty at your next meetup amongst friends. Just let the site know how many people you have, what your interests include (or exclude), and Unshelvd will give you a list of the games to pull off the (virtual) shelf.

It will give you suggestions for Connected (online) or Unplugged (in-person) games to play based on what's already on your shelf... or what you have in common with another user!

## Features
### Game Suggestion Form
The game suggestion feature is the core of this application.  On this form, users enter minimal information (how many people are playing, any category preferences etc) and the app generates a list of game suggestions based on the criteria. The following function updates the local state of this component with games that match a user's preferences. By updating local state, this also triggers the component to rerender, displaying updated games everytime the user updates and submits their preferences. 

```js
 handleSubmit(e) {
        const {allUsers, currentGroups, allGames} = this.props;

        e.preventDefault();
        let preferences = {
            library: this.state.library,
            numPlayers: this.state.numPlayers,
            category: this.state.category, 
            gameType: this.state.gameType 
        };
        let filteredGames = []
        
        const userPoolId = currentGroups[this.state.library]?.users
        let gamePool = []

        for (let i = 0; i < userPoolId.length; i++) {
            gamePool = gamePool.concat(allUsers[userPoolId[i]]?.games)
        }
        const realGamePool = gamePool.filter(item => {
            if (item) return item
        })

        for (let i = 0; i < realGamePool.length; i++) {
            if (!filteredGames.includes(allGames[realGamePool[i]])) {
                filteredGames.push(allGames[realGamePool[i]])
            }
        }

        const categoryFilter = (game, player) => {
            for (const ele of player) {
                if (game.includes(ele)) return true
            }
            return false
        }

        const typeFilter = (game, player) => {
            for (const ele of player) {
                if (game.includes(ele)) return true
            }
            return false
        }

        let userFiltered = []

        filteredGames.forEach(game => {
            if ( 
                game?.playerCount.max >= parseInt(preferences?.numPlayers) && 
                game?.playerCount.min <= parseInt(preferences?.numPlayers) &&
                categoryFilter(game.category, preferences.category) &&
                typeFilter(game.gameType, preferences.gameType)
                ) userFiltered.push(game)
        })
        this.setState({
            filteredGames: userFiltered
        })
    }
```

### Create Group Modal
The ability for a user to create a new group exists within a modal.  Because of this, after a group was created, the "All Groups" index page was not rerendering with the newly added group.  To solve this, we added a request to the backend upon creation that updated state and triggered a rerender.
```js
  // group_create_form.js
  handleSubmit(e) {
    e.preventDefault();

    let submitGroup = async() => this.props.createGroup(this.state)
    if (this.props.modal === 'addGroup') {
      submitGroup()
      .then(group => {
        // update current user's groups to include newly created group
        const updatedUser = this.props.currentUser;
        updatedUser.groups = this.props.currentUser.groups.concat(group.group.data._id);
        this.props.updateUser(updatedUser);
      })
      // fetchGroups updates state to trigger rerender
      .then(() => this.props.fetchGroups())
      // close modal
      .then(() => this.props.closeModal())
    } else {
      // Code here handles a user joining an already existing group.  
      // User is redirected to Group Show page so rerender was not an issue
    }
  }
```


## Next Steps
* Add ability for user to have a "favorites" section in library
* Incorporate AWS to allow user to upload their own photo when creating a game

---


![Feature: Suggest](https://i.imgur.com/VohF9iT.mp4)


---

![Feature: Groups](https://i.imgur.com/6kJ7yky.mp4)

---


![Feature: Auth & Library](https://i.imgur.com/tApp26H.mp4)

![Feature: Auth & Library](https://github.com/Bill-the-dev/Unshelvd_MERN/blob/d3a2720412b975adfe5a8ed70f14e00d71a1bb32/frontend/public/gif-auth-library.mp4)
