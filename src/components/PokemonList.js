import React from 'react';
import GridList from '@material-ui/core/GridList';

// components
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
    render() {
        var pokemon = []
        for (var i = 1; i <= 10; i++) {
            pokemon.push(
                <div key={i} >
                    <Pokemon pokeID={i} />
                    <br />
                </div>
            )
        }
        
        return (
            <GridList cellHeight={160} cols={3}>
                {pokemon}
            </GridList>
        );
    }

}

export default PokemonList;