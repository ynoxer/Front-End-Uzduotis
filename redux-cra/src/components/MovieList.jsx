import React from 'react';
import { Panel, Table } from 'react-bootstrap';


const MovieList = ({movies}) => { 

  const mapMovies = () => {
    if (movies) {
      return (
        movies.map(movie => (
          <tr key={movie.imdbID}>
            <td>
                {movie.Title}
            </td>
            <td>{movie.Year}</td>
          </tr>
        ))
      )
    }
  }

  return (
    <Panel className="movie-list">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Movies List</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Table> 
          <thead> 
            <tr> 
              <th>Title</th> 
              <th>Years</th> 
            </tr> 
          </thead> 
          <tbody> 
            {
              mapMovies()
            }
          </tbody> 
        </Table> 
      </Panel.Body>
    </Panel>
  )
}

export default MovieList; 
