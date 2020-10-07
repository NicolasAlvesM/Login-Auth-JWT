import React from 'react';
import './App.css';
import {AuthProvider} from './context/auth';
import Routes from './routes';
function App() {
  return (
    <AuthProvider>
    <Routes/>
    </AuthProvider>
  );
}

export default App;
