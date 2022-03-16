import {connect} from 'react-redux'
import SuggestForm from './suggest_form'
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = state => ({
    sessionUser: state.session.user, //Need to know who current user is because that will be an option for library selection 
    currentGroups: state.entities.groups,
    currentUser: state.entities.users.currentUser,
    groupUsers: state.entities.users.groupUsers //all the people from groups that the current user is in
})


const mapDispatchToProps = dispatch => ({
    // filterGames: preferences => dispatch(filterGames(preferences))
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestForm)