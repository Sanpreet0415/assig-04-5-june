// Base constructor function for Product
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Method to check availability
Product.prototype.checkAvailability = function() {
  return this.quantity > 0 ? true : false;
};

// Constructor function for Electronics inheriting from Product
function Electronics(name, price, quantity, brand, model) {
  Product.call(this, name, price, quantity);
  this.brand = brand;
  this.model = model;
}

// Inherit from Product
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Method for powering on
Electronics.prototype.powerOn = function() {
  return `${this.name} is powered on.`;
};

// Method for powering off
Electronics.prototype.powerOff = function() {
  return `${this.name} is powered off.`;
};

// Constructor function for Clothing inheriting from Product
function Clothing(name, price, quantity, size, color) {
  Product.call(this, name, price, quantity);
  this.size = size;
  this.color = color;
}

// Inherit from Product
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Method for checking fit
Clothing.prototype.checkFit = function() {
  return `${this.name} fits well.`;
};

// Constructor function for Books inheriting from Product
function Books(name, price, quantity, author, genre) {
  Product.call(this, name, price, quantity);
  this.author = author;
  this.genre = genre;
}

// Inherit from Product
Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

// Method for checking genre
Books.prototype.checkGenre = function() {
  return `${this.name} is in the ${this.genre} genre.`;
};

// Example usage
const laptop = new Electronics("Laptop", 1000, 5, "Dell", "XPS 15");
const shirt = new Clothing("Shirt", 20, 10, "M", "Blue");
const novel = new Books("Novel", 15, 20, "John Doe", "Fiction");

console.log(laptop.checkAvailability());
console.log(laptop.powerOn());

console.log(shirt.checkAvailability());
console.log(shirt.checkFit());

console.log(novel.checkAvailability());
console.log(novel.checkGenre());
