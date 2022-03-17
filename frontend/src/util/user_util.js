import axios from 'axios';

export const getAllUsers = () => (
  axios.get('/api/users/')
)

export const getUser = userId => (
  axios.get(`/api/users/${userId}`)
);

export const updateUser = user => (
  axios.patch(`/api/users/${user._id}`, {user})
)