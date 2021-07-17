// Паттерн прототип с этим паттерном мы можем создовать новые обькты, используя как скелет для его
// прототипа какие-то другие обьекты

const car = {
  wheels: 4,

  init() {
    console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Влад'
  }
})

console.log(carWithOwner.__proto__ === car)
carWithOwner.init()

