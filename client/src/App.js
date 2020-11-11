import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';



export default function App () {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  
  const [movieList, setMovieList] = useState([]); // default State of movieList


  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
          console.log('movies api', response.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  // const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  // };

  return (
    <div>
      

      <div>
      <Switch>
        <Route path ='/movies/:id' component={movieList}>
          <Movie movies={movieList} />
        </Route>

        <Route path='/' component={Movie}>
          <MovieList movies ={movieList} />
        </Route>
      </Switch>
      </div>
    </div>
  );
}
