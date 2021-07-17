// паттерн Decorator: добовляет новое поведение или функционал для существующих классов

class Server {
  constructor(ip, port) {
    this.port = port
    this.ip = ip
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

// @decorator - является обычной функцией которая принимает инстанс кокого-то класса, модифицируя его
// и возрощая его обратно 

// Создание декоратора aws
function aws(server) {
  server.isAWS = true
  server.awsInfo = function() {
    return server.url
  }

  return server
}

// Создание декоратора azure
function azure(server) {
  server.isAzure = true
  server.port += 5000
  return server
}

// Чтобы сделать данный инстанс декоратором его нужно обернуть в aws
const s1 = aws(new Server('12.32.0.01', 8080))
console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azure(new Server('91.32.1.0', 1000))
console.log(s2.isAzure)
console.log(s2.url)
