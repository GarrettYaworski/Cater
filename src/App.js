import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import router from './router'
import store from './ducks/store'
import {Provider} from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            {router}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
