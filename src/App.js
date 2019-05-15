import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route exact path='/:pokemon_id/' component={PokemonDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
