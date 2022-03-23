import * as GroupAPIUtil from '../util/group_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS'


// ACTION CREATOR
export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
})

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
})

export const receiveGroupErrors = errors => ({
  type: RECEIVE_GROUP_ERRORS,
  errors: errors.response.data
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

export const createGroup = group => dispatch => (
  GroupAPIUtil.createGroup(group)
    .then(group => dispatch(receiveGroup(group)))
    // .then(groups => dispatch(receiveGroups(groups)))
    .catch(err => dispatch(receiveGroupErrors(err)))
)

export const updateGroup = group => dispatch => {
  return(
    GroupAPIUtil.updateGroup(group)
      .then(group => dispatch(receiveGroup(group)))
      .catch(err => console.log(err))
  )
}
