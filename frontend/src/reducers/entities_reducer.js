import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import GamesReducer from './games_reducer';
import GroupsReducer from './groups_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    games: GamesReducer,
    groups: GroupsReducer
});

export default EntitiesReducer;