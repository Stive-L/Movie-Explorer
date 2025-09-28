import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import Filters from '../components/Filters'
import { searchMovies } from '../services/api'

function SearchPage() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [filters, setFilters] = useState({ year: '', type: '' })
  const [lastQuery, setLastQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const navigate = useNavigate()

  const handleSearch = async (query) => {
    setLoading(true)
    setHasSearched(true)
    setLastQuery(query)
    setCurrentPage(1)
    const result = await searchMovies(query, filters, 1)
    setMovies(result.movies)
    setHasMore(result.hasMore)
    setTotalResults(result.totalResults)
    setLoading(false)
  }

  const handleFiltersChange = async (newFilters) => {
    setFilters(newFilters)
    if (lastQuery) {
      setLoading(true)
      setCurrentPage(1)
      const result = await searchMovies(lastQuery, newFilters, 1)
      setMovies(result.movies)
      setHasMore(result.hasMore)
      setTotalResults(result.totalResults)
      setLoading(false)
    }
  }

  const handleLoadMore = async () => {
    setLoadingMore(true)
    const nextPage = currentPage + 1
    const result = await searchMovies(lastQuery, filters, nextPage)
    setMovies([...movies, ...result.movies])
    setHasMore(result.hasMore)
    setCurrentPage(nextPage)
    setLoadingMore(false)
  }

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  if (!hasSearched) {
    return (
      <div className="search-page home-page">
        <div className="home-container">
          <h1>Movie Explorer</h1>
          <SearchBar onSearch={handleSearch} />
          <div className="welcome-message">
            <h2>Recherchez un film...</h2>
            <p>Utilisez la barre de recherche ci-dessus pour trouver vos films préférés</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="search-page results-page">
      <h1>Movie Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <Filters onFiltersChange={handleFiltersChange} />
      
      {loading && <p>Chargement...</p>}
      {!loading && (
        <MovieList 
          movies={movies} 
          onMovieClick={handleMovieClick}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
          loadingMore={loadingMore}
          totalResults={totalResults}
        />
      )}
    </div>
  )
}

export default SearchPage
