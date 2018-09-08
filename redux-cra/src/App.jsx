import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import * as actionCreators from './actions/simpleAction';


class App extends Component {
  render() {
    const { getBatmanList } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>
         {
          JSON.stringify(this.props)
         }
        </pre>
        <Button bsStyle="primary" onClick={getBatmanList}>Test redux action</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
