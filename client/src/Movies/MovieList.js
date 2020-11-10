import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const effectFn = () => {
    axios
    .get('http:localhost:5000/api/movies')
    .then(res => {
      let movies = res.data;
      setMovies(movies);
    })
    .catch(error => {
      console.log('Error. Did not .get correctly', error);
    })
  };
  useEffect(effectFn, []);
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <Link to='movies/${id}'>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
    </div>
  );
}
