import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
function MovieCard({movie}) {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        

       <Rating movieRating={movie.rate} isMovieRating={true}/>
       <Link to={`/movie/${movie.id}`}>
            <Button variant="primary" style={{ marginTop: '10px' }}>
              View Description
            </Button>
          </Link>
      </Card.Body>

    </Card>
    </div>
  )
}

export default MovieCard
