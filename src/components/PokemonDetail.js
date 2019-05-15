import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from './../capitalize'

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {           
      width: '20%',
      marginLeft: '33%'
    },
  });

class PokemonDetail extends React.Component {
    state = {
        pokemon: null
    };

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.pokemon_id)
            .then(response => {
                axios.get('https://pokeapi.co/api/v2/pokemon-species/' + this.props.match.params.pokemon_id)
                    .then(species => {
                        this.setState(
                            {
                                pokemon:
                                {
                                    avatar: response.data.sprites.front_default,
                                    name: capitalize(response.data.name),
                                    description: capitalize(species.data.flavor_text_entries.filter(f => f.language.name === "en")[0].flavor_text),
                                    types: response.data.types.reverse().map((t) => t.type.name)
                                }
                            });
                    });
            });
    }

    render() {
        const { classes } = this.props;
        const poke = this.state.pokemon ?
            (
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={this.state.pokemon.name}
                            image={this.state.pokemon.avatar}
                            title={this.state.pokemon.name}
                            className={classes.media}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.state.pokemon.name}
                            </Typography>
                            <Typography component="p">
                                {this.state.pokemon.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
            :
            (
                <div>Loading pokemon...</div>
            )
            return (<div>{poke}</div>)
    }

}

export default withStyles(styles)(PokemonDetail);