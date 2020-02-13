import React from "react";
import {connect} from "react-redux";
import { getPokemonsThunk, setPokemonList} from "../../redux/Card-reducer";
import Cards from "./Cards";


class CardsContainer extends React.Component{
    componentDidMount() {
             //     pokemonAPI.getPokemonsList().then(data => {
             //         console.log(data.results);
             //         this.props.setPokemonList(data.count);
             //         this.props.getPokemonList(data.results)
             //         console.log(this.props.pokemonList)
             //     })

             this.props.getPokemonsThunk()
    }

    render(){
        return (
        <div>
            Total count of Pokemons: {this.props.pokemonAmount}
            {this.props.pokemonList.map(element => {
             return <Cards/>
        })}

        </div>)
    }
}

function mapStateToProps(state){
    return {
        pokemonAmount:state.cards.pokemonAmount,
        pokemonList:state.cards.pokemonList

    }
}

export default connect(mapStateToProps,{
    getPokemonsThunk
})(CardsContainer)