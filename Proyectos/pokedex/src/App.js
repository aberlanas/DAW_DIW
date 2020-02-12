import React, { Component } from 'react';
import logo from './imgs/pokeapi_256.png';
import './App.css';


const API = 'http://localhost:3000/api/v2/';

class Pokemon extends Component{

    constructor(props){
        super(props);
        this.state ={
            image : ""
        };
        this.muestraPokemon = this.muestraPokemon.bind(this);
    };

    muestraPokemon() {
        console.log('this is:', this);
      }

    componentDidMount() {
        // Esto se ejecuta cuando tenemos el componente en el DOM.
        // Es un buen momento para cargar datos.

        const {url} = this.props;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                
                //console.log(json);
                const image = json.sprites.front_default;
                //console.log(json.sprites.front_default);
                this.setState({ image });
            });
    }

    render(){
        const {nombre} = this.props;
        const {image} = this.state;
        
        return(
            <div>
                <div className="pokeNombre">{nombre}</div>
                <img src={image} alt={nombre} onClick={this.muestraPokemon}></img>
            </div>

        )

    }
}

class Detalles extends Component{
    constructor(props){
        super(props);
        this.state={
            id : ""
        };
    }

    render(){
        return (
        <div></div>
        );
    }
}

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
        // Esto se ejecuta cuando tenemos el componente en el DOM.
        // Es un buen momento para cargar datos.

        fetch(`${API}/pokemon/`)
            .then(res => res.json())
            .then(json => {
                const { results: pokemons } = json;
                this.setState({ pokemons });
            });
    }

    render() {
        
        const {pokemons} = this.state;

        return ( 
            <ul className = "listaPokemons" >
                {pokemons.map(pokemon =>
                    <li key={pokemon.name}>
                        <Pokemon url={pokemon.url} nombre={pokemon.name}/>
                    </li>
                )}
            
            </ul>
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
            /header> 
            <main>
            <Busqueda >
            </Busqueda>
            <Detalles>
            </Detalles>
            </main>
            </div>
        );
    }

    export default App;