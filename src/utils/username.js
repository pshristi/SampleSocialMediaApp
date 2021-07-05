
const ADJECTIVES = [
    "psychological",
    "hideous",
    "lumpy",
    "robust",
    "delicious",
    "jolly",
    "decorous"
]

const OBJECTS = [
    "chocolate",
    "hanger",
    "bookmark",
    "lotion",
    "screw",
    "wagon",
    "door"
]

function getRandomUserName()
{
    let adj = ADJECTIVES[Math.floor(Math.random() * 7)]
    let obj = OBJECTS[Math.floor(Math.random() * 7)]

    return `${adj}-${obj}`
}

module.exports = {
    getRandomUserName
}