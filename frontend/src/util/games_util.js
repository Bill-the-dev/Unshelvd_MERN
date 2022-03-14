import axios from 'axios';

export const getAllGames = () => (
    axios.get('/api/games')
)

export const getUserGames = (id) => (
    axios.get(`/api/games/user/${id}`)
)
// '/api/user/games' Nested under users instead of games util

export const getGame = (id) => (
    axios.get(`/api/game/${id}`)
)

export const createGame = data => (
    axios.post('/api/games/', data)
)