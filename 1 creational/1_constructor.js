// Данный паттерн позволяет создавать новые обьекты определенного типа
// Можно содавать фукнции как классы и применять к ним оператор new
// function Server(name, ip) {
//   this.name = name
//   this.ip = ip
// }
//
// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:80`
// } В таком стиле писали пока еще не появились классы

class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `https://${this.ip}:80`
  }
}

// Создание самого паттерна

const aws = new Server('AWS German', '31.31.22.11.1')
console.log(aws.getUrl())