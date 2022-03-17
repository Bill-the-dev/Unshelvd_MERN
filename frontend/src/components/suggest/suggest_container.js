import {connect} from 'react-redux'
import SuggestForm from './suggest_form'
import {fetchUser, fetchUsers} from '../../actions/user_actions'
import { fetchGames } from '../../actions/game_actions'
import { fetchGroups } from '../../actions/group_actions'

const mapStateToProps = state => ({
    sessionUser: state.session.user, //Need to know who current user is because that will be an option for library selection 
    currentGroups: state.entities.groups.userGroups,
    currentUser: state.entities.users.currentUser,
    allGames: state.entities.games.userGames,
    allUsers: state.entities.users.allUsers
})


const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchGames: () => dispatch(fetchGames()),
    fetchGroups: () => dispatch(fetchGroups())
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestForm)