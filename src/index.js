import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import NavigationService from './services/navigation';

import './config/ReactotronConfig';

import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

export default App;
