import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './Data';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieList from './components/MovieList';
import FilterByName from './components/FilterByName';
import FilterByRate from './components/Rating';
import AddMovie from './components/AddMovie';
import MovieDetail from './components/MovieDetail';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState('');
  const [rating, setRating] = useState(1);

  const location = useLocation(); // Hook pour obtenir la route actuelle

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      {/* Afficher le titre, les filtres et le formulaire uniquement sur la page principale */}
      {location.pathname === '/' && (
        <>
          <h1>MOVIE APP</h1>
          <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
          <FilterByRate isMovieRating={false} rating={rating} setRating={setRating} />
          <AddMovie add={add} />
        </>
      )}

      {/* Configuration des routes */}
      <Routes>
        <Route
          path="/"
          element={<MovieList movies={movies} inputSearch={inputSearch} rating={rating} />}
        />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
