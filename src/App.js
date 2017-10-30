import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
componenWillMount() {
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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
