import React, { Component } from 'react';
import players from '../Players/Players';
import PlayerCard from '../PlayerCard/PlayerCard';

class Cards extends Component {
    renderCardsList() {
        return players.map(player => {
          return <PlayerCard name={player.name} surname={player.surname} team={player.team} src={player.src} key={player.id} />
        })}
    
    render() {
        return (
            this.renderCardsList()
    )}
}

export default Cards;
