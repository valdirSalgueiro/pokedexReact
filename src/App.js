import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './components/PokemonList'
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div>
      <PokemonList/>
    </div>
  );
}

export default App;
