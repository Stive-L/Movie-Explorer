import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovieDetails } from '../services/api'

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id)
      setMovie(data)
      setLoading(false)
    }
    fetchMovie()
  }, [id])

  if (loading) return <div className="loading"><div className="spinner"></div><p>Chargement...</p></div>

  return (
    <div className="movie-details">
      <button onClick={() => navigate('/')} className="back-button">← Retour</button>
      <div className="movie-details-content">
        <div className="movie-poster">
          {movie.Poster !== 'N/A' ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <div className="no-poster">Pas d'affiche</div>
          )}
        </div>
        <div className="movie-info">
          <h1>{movie.Title}</h1>
          <div className="movie-meta">
            <span>{movie.Year}</span>
            <span>⭐ {movie.imdbRating}</span>
            <span>{movie.Runtime}</span>
          </div>
          <div className="movie-details-list">
            <div className="detail-item"><strong>Genre:</strong> {movie.Genre}</div>
            <div className="detail-item"><strong>Réalisateur:</strong> {movie.Director}</div>
            <div className="detail-item"><strong>Acteurs:</strong> {movie.Actors}</div>
          </div>
          <div className="plot">
            <h3>Synopsis</h3>
            <p>{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
