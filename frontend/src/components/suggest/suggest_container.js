import {connect} from 'react-redux'


const mapStateToProps = state => ({
    currentUser: state.session.currentUser, //Need to know who current user is because that will be an option for library selection 
    currentGroups: state.entities.groups
})


const mapDispatchToProps = dispatch => ({
    filterGames: preferences => dispatch(filterGames(preferences))
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestForm)