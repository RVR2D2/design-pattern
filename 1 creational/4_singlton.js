// Паттерн singleton: если в приложении существует 1 класс то в приложении может быть 1 инстанс данного класса

class Database {
  constructor(data) {
  // Определяем что это будет singleton
    if (Database.exists) {
      return Database.instance
    }

    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

// Singleton отрисут только 1 инстанс класса
const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())