import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';


class App extends Component {
componentWillMount() {
  const config = {
    apiKey: 'AIzaSyDYYWs7xN9GHTzzabOqR-j7z8sBZ5sYuoY',
    authDomain: 'manager-70877.firebaseapp.com',
    databaseURL: 'https://manager-70877.firebaseio.com',
    projectId: 'manager-70877',
    storageBucket: 'manager-70877.appspot.com',
    messagingSenderId: '705570908030'
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
