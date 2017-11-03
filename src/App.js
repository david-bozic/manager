import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
componenWillMount() {
firebase.initializeApp({
  apiKey: 'AIzaSyDYYWs7xN9GHTzzabOqR-j7z8sBZ5sYuoY',
  authDomain: 'manager-70877.firebaseapp.com',
  databaseURL: 'https://manager-70877.firebaseio.com',
  projectId: 'manager-70877',
  storageBucket: 'manager-70877.appspot.com',
  messagingSenderId: '705570908030'
  });
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
