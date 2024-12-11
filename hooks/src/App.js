
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './Data';
import { useState } from 'react';
import MovieList from './components/MovieList';
import FilterByName from './components/FilterByName';
import FilterByRate from './components/Rating';
import AddMovie from './components/AddMovie';

function App() {
  const[movies,setMovies]= useState(moviesData);
  const [inputSearch,setInputSearch]= useState("");
  const [rating,setRating]= useState(1);
  const add = (newmovie) =>{
    setMovies([...movies,newmovie])
  }

  return (
    <div className="App">
      <h1>MOVIE APP</h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterByRate isMovieRating={false} rating={rating} setRating={setRating}/>
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating}/>
      <AddMovie add={add}/>
    </div>
  );
}

export default App;
