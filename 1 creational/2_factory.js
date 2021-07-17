// Паттерн Factory: он позволяет создать некую сущьность которая обьединяет все классы и сама определяет какой
// инстанс нам создать в зависимости от типа.

class SimpleMemberShip {
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}

class StandardMemberShip {
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}

class PremiumMemberShip {
  constructor(name) {
    this.name = name
    this.cost = 500
  }
}

class MemberFactory {

  // Указываем ссылки на классы
  static list = {
    simple: SimpleMemberShip,
    standard: StandardMemberShip,
    premiun: PremiumMemberShip
  }

  // Создаем инстанс
  create(name, type = 'simple') {

  // Записываем класс
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple
    const member = new Membership(name)
    member.type = type
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }

    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Temirlan', 'simple'),
  factory.create('Vasilisa', 'standard'),
  factory.create('Vadim', 'premium')
]

members.forEach(m => {
  m.define()
})