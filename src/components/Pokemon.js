import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import {capitalize} from './../capitalize'

class Pokemon extends React.Component {
    state = {
        avatar: '',
        name: '',
        types: []
    };

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeID)
            .then(response => {
                axios.get('https://pokeapi.co/api/v2/pokemon-species/' + this.props.pokeID)
                    .then(species => {
                        console.log(response);
                        console.log(species);
                        this.setState({
                            avatar: response.data.sprites.front_default,
                            name: capitalize(response.data.name),
                            description: capitalize(species.data.flavor_text_entries.filter(f=>f.language.name == "en")[0].flavor_text),
                            types: response.data.types.reverse().map((t) => t.type.name)
                        });
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={this.state.name}
                        image={this.state.avatar}
                        title={this.state.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.name}
                        </Typography>
                        <Typography component="p">
                            {this.state.description}
          </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

}

export default Pokemon;