import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import { Link } from 'react-router-dom'

import { capitalize } from './../capitalize'

class Pokemon extends React.Component {
    state = {
        avatar: '',
        name: '',
        types: []
    };

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.pokeID)
            .then(response => {
                this.setState({
                    avatar: response.data.sprites.front_default,
                    name: capitalize(response.data.name),
                    types: response.data.types.reverse().map((t) => t.type.name)
                });
            });
    }

    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <Link to={'/'+ this.props.pokeID}>
                                {this.state.name}
                            </Link>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

}

export default Pokemon;