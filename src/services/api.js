const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const searchMovies = async (query, filters = {}, page = 1) => {
  let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
  
  if (filters.year) url += `&y=${filters.year}`
  if (filters.type) url += `&type=${filters.type}`
  
  const response = await fetch(url)
  const data = await response.json()
  return {
    movies: data.Search || [],
    totalResults: parseInt(data.totalResults) || 0,
    hasMore: parseInt(data.totalResults) > page * 10
  }
}

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
  )
  const data = await response.json()
  return data
}
