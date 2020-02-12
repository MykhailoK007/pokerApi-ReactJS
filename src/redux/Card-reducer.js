const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
const GET_POKEMON_LIST = 'GET_POKEMON_LIST';


let initalState = {
        pokemonAmount:0,
        pokemonList:[]
}
function cardReducer(state = initalState, action){
        switch(action.type) {
                case SET_POKEMON_LIST :
                        return {
                                ...state,
                                pokemonAmount: action.pokemonAmount
                        }
                case GET_POKEMON_LIST:
                        return {
                                ...state,
                                pokemonList:[ ...state.pokemonList,...action.pokemonList]
                        }
                default :
                        return state;
        }

}




export const  setPokemonList = (pokemonAmount) => {
        return {
                type:SET_POKEMON_LIST,
                pokemonAmount
        }
}
export const getPokemonList = (pokemonList) => {

        return {
                type:GET_POKEMON_LIST,
                pokemonList
        }
}
export const getPokemonByName = (name) => {
        return {
                type:GET_POKEMON_BY_NAME,
                name
        }
}

export default cardReducer;
