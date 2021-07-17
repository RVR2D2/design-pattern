// Паттерн adapter: он позволяет интегрировать старый интерфейс класса в новый интерфейс, и позволяет
// им работать совместно при этом не ломая все приложение

class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add':
        return t1 + t2
      case 'sub':
        return t1 - t2
      default:
        return NaN
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }

  sub(t1, t2) {
    return t1 - t2
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new newCalc()
  }

  operations(t1, t2, operation) {
    switch (operation) {
      case 'add':
        return this.calc.add(t1, t2)
      case 'sub':
        return this.calc.sub(t1, t2)
      default:
        return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(20, 30))

const adapter = new CalcAdapter()
console.log(adapter.operations(25, 25, 'sub'))