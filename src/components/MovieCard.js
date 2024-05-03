import React from 'react';
import { Link } from 'react-router-dom';

function MovieListItem({ movie }) {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>
        {movie.title}
      </Link>
    </li>
  );
}

export default MovieListItem;
