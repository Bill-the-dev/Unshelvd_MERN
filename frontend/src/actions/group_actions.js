import * as GroupAPIUtil from '../util/group_util';

export const RECEIVE_GROUP = "RECEIVE_GROUP";


// ACTION CREATOR
export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
})


// THUNK ACTION

export const fetchGroup = groupId => dispatch => (
  GroupAPIUtil.getGroup(groupId)
  .then(group => dispatch(receiveGroup(group)))
  .catch(err => console.log(err))
)