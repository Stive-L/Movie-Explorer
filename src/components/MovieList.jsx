import MovieCard from './MovieCard'

function MovieList({ movies, onMovieClick, hasMore, onLoadMore, loadingMore, totalResults }) {
  if (movies.length === 0) return <div>Aucun film trouvé.</div>

  return (
    <div className="movie-list">
      <h2>Résultats ({totalResults} films)</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={() => onMovieClick(movie.imdbID)} />
        ))}
      </div>
      
      {hasMore && (
        <button onClick={onLoadMore} className="load-more-button" disabled={loadingMore}>
          {loadingMore ? 'Chargement...' : 'Charger plus'}
        </button>
      )}
    </div>
  )
}

export default MovieList
