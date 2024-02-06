//工厂方法模式定义了一个创建对象的接口，但是由子类决定要实例化的类是哪一个。可以将对象的创建和使用分离
class Animal {
  speak() {
    throw new Error("不能直接调用");
  }
}

class Dog extends Animal {
  speak() {
    console.log("\x1B[31m汪汪汪\x1B[0m");
  }
}

class Cat extends Animal {
  speak() {
    console.log("\x1B[36m喵喵喵\x1B[0m");
  }
}

class AnimalFactory {
  createAnimal(animalType) {
    switch (animalType) {
        case "dog":
            return new Dog();
        case "cat":
            return new Cat();
        default:
            throw new Error("没有匹配的动物模型");
    }
  }
}

const animalFactory = new AnimalFactory()
const dog = animalFactory.createAnimal('dog')
dog.speak()
const cat = animalFactory.createAnimal('cat')
cat.speak()
