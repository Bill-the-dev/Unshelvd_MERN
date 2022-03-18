import axios from 'axios';

// export const getUserGroups = userId => (
//   axios.get(`/api/${userId}/groups`) //This is based on lines 129-134 in routes > api > user.js. 
//   // Assuming incomplete route and final route will look something like this 
// )

export const getAllGroups = () => (
  axios.get('/api/groups/')
)

export const getGroup = groupId => (
  axios.get(`/api/groups/${groupId}`)
)

export const createGroup = data => (
  axios.post('/api/groups/', data)
)

export const deleteGroup = groupId => (
  axios.delete(`/api/groups/${groupId}`)
)

// EDIT?
export const updateGroup = (group) => (
  axios.patch(`/api/groups/${group._id}`, {group})
)