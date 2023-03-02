import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './components/header/Header';
import { Animals } from './components/animals/Animals';
import { Outlet } from 'react-router-dom';
import { IAnimal } from './models/IAnimal';

function App() {
  return (
    <div className="App">
      <Header/>
      <main><Outlet/></main>
    </div>
  );
}

export default App;
