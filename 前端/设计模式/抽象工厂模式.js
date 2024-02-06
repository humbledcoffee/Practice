//抽象工厂模式提供了一种封装一组具有相同主题的单个工厂的方式。它有一个接口，用于创建相关或依赖对象的家族，而不需要指定实际实现的类
// 创建一组主题对象类型的抽象类
class AnimalFood {
  provide() {
    throw new Error("This method must be implemented.");
  }
}

class AnimalToy {
  provide() {
    throw new Error("This method must be implemented.");
  }
}
// 创建一组具体代表家族的对象
class HighQualityCatFood extends AnimalFood {
  provide() {
    console.log("\x1B[36m高质量猫粮\x1B[0m");
  }
}

class HighQualityCatToy extends AnimalToy {
  provide() {
    console.log("\x1B[36m高质量猫玩具\x1B[0m");
  }
}

class CheapQualityDogFood extends AnimalFood {
  provide() {
    console.log("\x1B[36m一般品质的狗粮\x1B[0m");
  }
}

class CheapQualityDogToy extends AnimalToy {
  provide() {
    console.log("\x1B[36m一般品质的狗玩具\x1B[0m");
  }
}

//创造一个抽象生产工厂
class AnimalProductsAbstractFactory {
  createFood() {
    throw new Error("This method must be implemented.");
  }

  createToy() {
    throw new Error("This method must be implemented.");
  }
}

//创建具体工厂类
class HighQualityAnimalProductsFactory extends AnimalProductsAbstractFactory {
  createFood() {
    return new HighQualityCatFood();
  }
  createToy() {
    return new HighQualityCatToy();
  }
}

class CheapQualityAnimalProductsFactory extends AnimalProductsAbstractFactory {
  createFood() {
    return new CheapQualityDogFood();
  }

  createToy() {
    return new CheapQualityDogToy();
  }
}

// 使用具体工厂类来创建相关的对象
const highQualityAnimalProductsFactory = new HighQualityAnimalProductsFactory();
highQualityAnimalProductsFactory.createFood().provide()
highQualityAnimalProductsFactory.createToy().provide();