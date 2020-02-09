import React, { Component } from 'react';
import logo from './imgs/pokeapi_256.png';
import './App.css';


const API = 'http://localhost:3000/api/v2/';

class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            pokelista:[],
            query: '',
        };
    }

    componentDidMount() {
        //First method to be called after components mount
        //fetch the data from the server for the suggestion
        fetch(`${API}/pokemon/`)
            .then(res => res.json())
            .then(json => {
                const { results: pokemons } = json;
                console.log(json);
                this.setState({ pokemons });
                const pokelista = pokemons.map((pokemon) => 
                {
                console.log(pokemon.name);
                return (<li>{pokemon.name}</li>);
                }
            );
                this.setState({pokelista});
            });
    }

    render() {
        return ( 
        <div className = "Patata" >
            Angel : Angel
        </div>
        );
        }




    }


    function App() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            /header> <
            Busqueda >

            <
            /Busqueda> <
            /div>
        );
    }

    export default App;