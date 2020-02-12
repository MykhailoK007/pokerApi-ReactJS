import React from 'react';
import './App.css';
import {pokemonAPI} from "./API/api";
import CardsContainer from "./Components/Cards/CardsContainer";

function App() {

  return (
        <div className="">
          <header className="">POKEDEX</header>
          <CardsContainer/>


        </div>

  );
}

export default App;
