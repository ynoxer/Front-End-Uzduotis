import React from 'react';
import { Panel, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const MovieSelection = ({value, onChange}) => { 



  return (
    <Panel className="movie-list">
      <Panel.Heading>
        <ToggleButtonGroup
          type="radio"
          name="selection"
          value={value}
          onChange={onChange}
        >
          <ToggleButton value={'batman'}>Batman</ToggleButton>
          <ToggleButton value={'superman'}>Superman</ToggleButton>
          <ToggleButton value={'iron_man'}>Iron Man</ToggleButton>
        </ToggleButtonGroup>
      </Panel.Heading>
    </Panel>
  )
}

export default MovieSelection; 
