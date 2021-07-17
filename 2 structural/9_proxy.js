// Паттерн Proxy: данный паттерн позволяет ставить ловушки: (На поля обьектов, на вызов функции) и это позволяет нам
// очень гибко настраивать приложение

function networkFetch(url) {
  return `${url} - Ответ с сервера`
}

// Создаем кэш
// В Set() мы будем запсывать данные которые не будут повторятся
const cache = new Set()

// Создание proxy
const proxiedFetch = new Proxy(networkFetch, {
  // Передаем параметры которые хотим отследить
  apply(target, thisArg, args) {
    const url = args[0]

    if (cache.has(url)) {
      return `${url} - Ответ из кеша`
    } else {
      cache.add(url)
      // Обробатываем любую функцию
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('angular.io')) // Ответ с сервера
console.log(proxiedFetch('react.io')) // Ответ с сервера
console.log(proxiedFetch('angular.io')) // Ответ из кеша
