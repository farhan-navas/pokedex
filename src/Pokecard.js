import React, { Component } from "react";
import "./Pokecard.css"


class Pokecard extends Component {
    render() {
        const {id, name, type, base_experience} = this.props
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-header">{name}</h2>
                <img className="Pokecard-image" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt=""/>
                <div>Type: {type}</div>
                <div>EXP: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard