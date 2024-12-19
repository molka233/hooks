import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams(); // Récupère l'ID du film depuis l'URL
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Film non trouvé</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">
        <button style={{ marginTop: '20px', padding: '10px 15px', cursor: 'pointer' }}>
          Retour à l'accueil
        </button>
      </Link>
    </div>
  );
}

export default MovieDetail;


