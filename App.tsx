import 'react-native-gesture-handler'; 
import React from 'react';
import Route from './src/routes/route';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';  

export default () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        < Route />
      </Provider>
    </NavigationContainer>
  );
};

