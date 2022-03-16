import * as GroupAPIUtil from '../util/group_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";


// ACTION CREATOR
export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
})

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
})


// THUNK ACTION
export const fetchGroups = () => dispatch => (
  GroupAPIUtil.getAllGroups()
    .then(groups => dispatch(receiveGroups(groups)))
    .catch(err => console.log(err))
)

export const fetchGroup = groupId => dispatch => (
  GroupAPIUtil.getGroup(groupId)
  .then(group => dispatch(receiveGroup(group)))
  .catch(err => console.log(err))
)