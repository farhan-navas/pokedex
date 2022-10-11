import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        const props = this.props
        return (
            <div className="Pokedex">
                <h1 className="Pokedex-header">Pokedex!</h1>
                <div className="Pokedex-container">
                {props.pokemon.map((p) => (
                    <div>
                        <Pokecard 
                            id={p.id < 10 ? `00${p.id}` : p.id < 100 ? `0${p.id}` : p.id} 
                            name={p.name} 
                            type={p.type}
                            base_experience={p.base_experience}
                        />
                    </div>
                ))}
                </div>
                <div className={props.isWinner ? "Pokedex-winner" : "Pokedex-loser"}>
                    <div>{props.exp}</div>
                    <div>{props.isWinner ? 'Winner' : 'Loser!'}</div>
                </div>            
            </div>
        )
    }    
}

export default Pokedex;
