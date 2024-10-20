// 1) Create a Car class with properties make, model, and year,
//  then make instance of electric car which have battery level


class Car{
  constructor(make, model, year){
    this.make = make
    this.model = model
    this.year = year
  }


}

class ElectricCar extends Car{
  constructor(make, model, year, btryLevel){
    super(make, model, year)
    this.btryLevel = btryLevel
  }

  getInfo(){
    console.log(`Brand: ${this.make}, Model: ${this.model}, Year: ${this.year}, Battery Level: ${this.btryLevel}`)
  }
}


const car = new ElectricCar('Ford', 'Mach-E', '2019', '44')
// car.getInfo()


// 2) Create a Library class that stores a list of books (as an array)
//  which have following methods addBook(), removeBook(), listBooks()

class Library{
  constructor(){
    this.books = []
  }

  addBook(book){
    const index = this.books.indexOf(book)
    if(index === -1) this.books.push(book)
    else console.log('this book is already in list')
  }

  removeBook(book){
    const index = this.books.indexOf(book)
    if(index !== -1) this.books.splice(index,1)
    else console.log('book is not in the list')
  }

  listBooks(){
    console.log(this.books)
  }

}

const libr = new Library
// libr.addBook('tomaskoxi')
// libr.addBook('kaci romelic icinis')
// libr.removeBook('tomaskoxi')
// libr.listBooks()


// 3) Create a class Employee with a method calculateSalary()
//  that calculates salary based on hours worked and hourly rate.


class Employee{
  constructor(hourlyRate, workedHours){
    this.hourlyRate = hourlyRate
    this.workedHours = workedHours
  }

  calculateSalary(){
    console.log(`Salary of employee is ${this.hourlyRate * this.workedHours}`)
  }
  
}

const emp = new Employee(10, 8)
// emp.calculateSalary()


// 4) Create a class ShoppingCart that holds a list of items.
//  methods, addItem(), deleteItem(), updateItem(), calculateTotal()


class ShoppingCart{
  constructor(){
    this.items = []
  }

  addItem(name, qnty, price){
    const prodInItems = this.items.find(prod => prod.name === name);

    const prod = {
      name,
      qnty,
      price
    }

    if(!prodInItems){
      this.items.push(prod)
    }else{
      prodInItems.name = name
      prodInItems.qnty += qnty
      prodInItems.price += price
    }

  }

  deleteItem(name){
    const prodInItems = this.items.find(prod => prod.name === name);

    if (prodInItems){
      const index = this.items.indexOf(prodInItems)
      this.items.splice(index, 1)
    }else{
      console.log('item with this name not found!')
    }

  }

  updateItem(name, qnty, price){
    const prodInItems = this.items.find(prod => prod.name === name);

    if(prodInItems){
      if(qnty) prodInItems.qnty = qnty
      if(price) prodInItems.price = price

    }else{
      console.log('item with this name not found!')
    }

  }

  calculateTotal(){
    console.log(this.items.reduce((tot,curr)=>{
      const price = curr.price * curr.qnty
      return tot += price
    },0))
  }


  getAllItems(){
    console.log(this.items)
  }

}


const cart = new ShoppingCart()

// Add Items

cart.addItem('laptop', 1, 1000)
cart.addItem('laptop', 4, 2000)
cart.addItem('phone', 1, 1000)
cart.addItem('phone', 4, 2000)
cart.addItem('keyboard', 2, 1000)

// cart.getAllItems()


// Detele Item

// cart.deleteItem('laptop')
// cart.getAllItems()



// Update Item

// cart.updateItem('phone', 1, 2111)
// cart.getAllItems()

// Calculate total Price
// cart.calculateTotal()
// cart.getAllItems()




// 5)  Create a CarFactory class that have following methods,
//  addCar, deleteCar, updateCar, getAllCars

class CarFactory{

  constructor(){
    this.cars = []
    this.nextId = 1
  }

  addCar(make, model, year){
    const car = {
      make,
      model,
      year,
      id: this.nextId ++
    }
    this.cars.push(car)
  }

  deleteCar(carId){
    const index = this.cars.findIndex(car => car.id === carId);

    if (index !== -1) {
      this.cars.splice(index, 1)
    }else{
      console.log('car with this ID not found')
    }
  }

  updateCar(carId, make, model, year){
    const car = this.cars.find(car => car.id === carId);

    if(car){
      if(make) car.make = make
      if(model) car.model = model
      if(year) car.year = year
    }else{
      console.log('car with this ID not found!')
    }

  }


  getAllCars(){
    console.log(this.cars)
  }
}

const car1 = new CarFactory()


// Add Car
car1.addCar('BMW', 'E-220', 2001)
car1.addCar('Mercedes', 'cls', 2004)
car1.addCar('Honda', 'civi', 2011)
car1.addCar('Opel', 'astra', 2008)
// car1.getAllCars()

// delete car
// car1.deleteCar(3)
// car1.getAllCars()


// Update Car
// car1.updateCar(1,'beenve', undefined, 2010)
// car1.getAllCars()