import React , {Component} from 'react';
import logo from './imgs/pokeapi_256.png';
import './App.css';


const API = 'https://pokeapi.co/api/v2/';

class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
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
        //setting the data in the films state
      });
  }

  render(){
    return (<div className="Patata">
      "Angel"
    </div>);
  }




}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Busqueda>

      </Busqueda>
    </div>
  );
}

export default App;
