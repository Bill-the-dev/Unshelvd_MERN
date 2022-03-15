import axios from 'axios';

export const getAllGames = () => (
    axios.get('/api/games')
)

export const getGame = gameId => (
    axios.get(`/api/games/${gameId}`)
)
    
export const createGame = data => (
    axios.post('/api/games/', data)
)




export const getUserGames = userId => (
    axios.get(`/api/users/${userId}/games`)
)
// '/api/user/games' Nested under users instead of games util


export const getGroupGames = groupId => (
    axios.get(`/api/groups/${groupId}/games`)
)


