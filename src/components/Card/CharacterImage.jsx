import React from 'react'

const CharacterImage = ({ race }) => {
    

    const images = {
        human: require("../images/human/human_idle.png"),
        orc: require("../images/orc/orc_idle.png"),
        troll: require("../images/troll/troll_idle.png")
    }

    const image = images[race]

    return (
        <img src={image} alt="" width={128} />
    );
}

export default CharacterImage;