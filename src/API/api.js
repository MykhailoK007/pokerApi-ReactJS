import * as axios from 'axios';


const pokemonList = axios.create({
    baseURL:'http://pokeapi.co/api/v2/'
});



export const pokemonAPI= {
    getPokemonsList() {
       return  pokemonList.get('pokemon/?limit=12')
            .then(responce => {
                return responce.data
            })

    },
    getPokemonByName(name){
        return pokemonList(`ability/${name}`)
            .then(responce => {
                return responce.data
            })
    }
}