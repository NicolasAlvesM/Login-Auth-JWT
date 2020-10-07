import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import {AuthProvider} from './src/context/auth'
function App(){
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer> 
    </AuthProvider>
  );
};
export default App;
