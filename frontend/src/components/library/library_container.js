import { connect } from 'react-redux';

import Library from './library';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);