
const playIntro = (race) => {
    const sounds = {
        human: require("../sounds/human/intro.wav"),
        orc: require("../sounds/orc/intro.wav"),
        troll: require("../sounds/troll/intro.wav")
    }
    return new Audio(sounds[race]).play()
}

module.exports = {
    playIntro
}

