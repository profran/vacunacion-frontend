import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      </Provider>
    )
  }
}

export default App;
