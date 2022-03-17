import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import gameErrorsReducer from './game_errors_reducer'

export default combineReducers({
    session: SessionErrorsReducer,
    game: gameErrorsReducer
});