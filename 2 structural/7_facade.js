// Паттерн Facade: позволяет создать более простой и уникальный интерфейс для взаимо действия с различными классами

class Complains {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {

  }

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complains {
  reply({id, customer, details}) {
   return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complains {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }
}

const registry = new ComplaintRegistry()
console.log(registry.register('Vadim', 'service', 'недоступен'))
console.log(registry.register('Elena', 'product', 'вылизит ошибка'))