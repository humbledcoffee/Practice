//原型模式（Prototype Pattern）是一种创建型设计模式，
// 它可以用于创建对象的成本相对较高，但对于由相同属性的对象可以通过克隆来创建。
// 原型模式将对象的创建过程和对象的使用过程分离，它通过克隆已有对象来创建新的对象，从而避免了昂贵的对象创建过程。
// 在 JavaScript 中，原型模式的实现很容易，因为它天然支持对象的 clone（即浅拷贝）
// 创建一个原型对象
const carPrototype = {
  wheels: 4,
  color: 'red',
  start() {
    console.log('Starting the car...');
  },
  stop() {
    console.log('Stopping the car...');
  },
};

// 使用Object.create()方法克隆
const car1 = Object.create(carPrototype);
console.log(car1); // Output: {}

car1.wheels = 6;
console.log(car1.wheels); // Output: 6
console.log(car1.color); // Output: red

car1.start(); // Output: Starting the car...
car1.stop(); // Output: Stopping the car...

// 克隆另一个对象
const car2 = Object.create(carPrototype);
console.log(car2); // Output: {}

car2.color = 'blue'; 
console.log(car2.color); // Output: blue
console.log(car2.wheels); // Output: 4

car2.start(); // Output: Starting the car...
car2.stop(); // Output: Stopping the car...

// 原型模式的一个优点是它提供了一种简便的方式来创建具有相同属性的对象。
// 它可以减少重复代码，并且在创建对象时节省时间和资源。
// 当然，它也有一些缺点，例如在使用深拷贝时可能会出现意想不到的问题，因为深拷贝将复制所有属性，而这些属性还可能引用其他对象。

