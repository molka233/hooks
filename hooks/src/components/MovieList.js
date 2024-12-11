import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,inputSearch,rating}) => {
  return (
      <div className='movie-list'>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {movies
        .filter(movie =>
          movie.title.toUpperCase().includes(inputSearch.toUpperCase())
          &&
          movie.rate>= rating
        )
        .map(movie => <MovieCard movie={movie} key={movie.id} />)}
        
     
        
    </div>
    </div>
  )
}

export default MovieList
