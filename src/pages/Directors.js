import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const directors = [
  { name: "Quentin Tarantino", movies: ["Pulp Fiction", "Reservoir Dogs", "Kill Bill"] },
  { name: "Christopher Nolan", movies: ["Inception", "Interstellar", "The Dark Knight"] },
  { name: "Martin Scorsese", movies: ["Goodfellas", "Taxi Driver", "The Wolf of Wall Street"] },
];

function DirectorsPage() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route path="/directors" component={DirectorsPage} />
    </Router>
  );
}

export default App;
