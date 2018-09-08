import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';

class MovieList extends Component { 

  render(){
    if (this.props.movies) {
      return (
        <Panel className="movie-list">
          <Panel.Heading>Movies List</Panel.Heading>
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
                  this.props.movies.map(movie => (
                    <tr key={movie.imdbID}>
                      <td>
                          {movie.Title}
                      </td>
                      <td>{movie.Year}</td>
                    </tr>
                  ))
                }
              </tbody> 
            </Table> 
          </Panel.Body>
        </Panel>
      )
    } else {
      return (
        <Panel className="movie-list">
          <Panel.Heading>Movies List</Panel.Heading>
          <Panel.Body>
            <Table> 
              <thead> 
                <tr> 
                  <th>Title</th> 
                  <th>Years</th> 
                </tr> 
              </thead> 
              <tbody> 
                
              </tbody> 
            </Table> 
          </Panel.Body>
        </Panel>
      )
    }
  }
  
  
 
}

export default MovieList; 
