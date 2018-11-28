import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import router from './router'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
