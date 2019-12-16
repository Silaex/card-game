import React, { useEffect } from 'react';
import './Card.css';
import characters from "./character.json";
import CharacterImage from './CharacterImage';
import { playIntro } from './IntroPlayer'

const Card = ({ name, choosen, pick }) => {

    const character = characters.find(character => character.name === name);
    const race = character.race;
    const ideology = character.description.ideology
    const wealth = character.description.wealth
    const location = character.description.location
    const text = character.description.text

    if (choosen === name) {
        playIntro(race)
    }

    return (
        <div className={choosen === name ? "card choosen" : "card"} onClick={() => { pick(name) }}>
            <h1 className="card-title">{name}</h1>
            <div className="card-content">
                <div className="card-description">
                    <div className="image-card">
                        <CharacterImage race={race} />
                    </div>
                    <div className="description">
                        <div className="ideology">
                            IDEOLOGY: 
                            <div className="ideology-item">
                                {ideology}
                            </div>
                        </div>
                        <div className="wealth">
                            WEALTH: 
                            <div className="wealth-item">
                                {wealth}
                            </div>
                        </div>
                        <div className="location">
                            LOCATION: 
                            <div className="location-item">
                                {location}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="descriptive-text">
                    {
                        text.map(text => <div>{text}</div>)
                    }
                </div>
            </div>
        </div>
    );
}


export default Card;