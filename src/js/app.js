class Team {
    constructor() {
        this.collection = []
    }
    [Symbol.iterator]() {
       return  this.collection.values()
    }
}
const character = new Team()
const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }
character.collection.push(char)
character.collection.push(char)
for (const iterator of character) {
    console.log(iterator)
}
