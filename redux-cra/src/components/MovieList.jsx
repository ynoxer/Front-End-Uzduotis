import React from 'react';
import { Panel, Table, ToggleButtonGroup, ToggleButton, Glyphicon } from 'react-bootstrap';


const MovieList = ({movies, value, onChange}) => { 

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
        <Panel.Title>Movies List</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Table> 
          <thead> 
            <tr> 
              <th>
                Title
                <ToggleButtonGroup
                  className="button-sort"
                  type="radio"
                  name="selection"
                  value={value}
                  onChange={onChange}
                >
                  <ToggleButton value={1}>
                    <Glyphicon glyph="arrow-up"/>
                  </ToggleButton>
                  <ToggleButton value={2}>
                    <Glyphicon glyph="arrow-down"/>
                  </ToggleButton>
                </ToggleButtonGroup>
              </th> 
              <th>
                Years
                <ToggleButtonGroup
                  className="button-sort"
                  type="radio"
                  name="selection"
                  value={value}
                  onChange={onChange}
                >
                  <ToggleButton value={3}>
                    <Glyphicon glyph="arrow-up"/>
                  </ToggleButton>
                  <ToggleButton value={4}>
                    <Glyphicon glyph="arrow-down"/>
                  </ToggleButton>
                </ToggleButtonGroup>
              </th> 
            </tr> 
          </thead> 
          <tbody>
            { mapMovies() }
          </tbody>
        </Table> 
      </Panel.Body>
    </Panel>
  )
}

export default MovieList; 
