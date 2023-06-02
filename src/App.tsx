import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const dispatch = useAppDispatch()
  
  return (
    <div className="App">
      wazzap dude
    </div>
  );
}

export default App;
