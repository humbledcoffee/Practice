// 桥接模式（Bridge Pattern）是一种结构型设计模式，它将一个对象的抽象和实现分离开来，从而使它们都可以独立变化。
// 实现类接口
class Implementor {
  operationImpl() {
    console.log('Implementor：执行操作');
  }
}

// 抽象类
class Abstraction {
  constructor(implementor) {
    this.implementor = implementor;
  }

  operation() {
    this.implementor.operationImpl();
  }
}

// 扩展抽象类
class RefinedAbstraction extends Abstraction {
  otherOperation() {
    console.log('RefinedAbstraction：其他操作');
  }
}

// 使用桥接模式
const implementor = new Implementor();
const abstraction = new Abstraction(implementor);
abstraction.operation(); // Output: Implementor：执行操作

const refinedAbstraction = new RefinedAbstraction(implementor);
refinedAbstraction.operation(); // Output: Implementor：执行操作
refinedAbstraction.otherOperation(); // Output: RefinedAbstraction：其他操作

// 在上述代码中，我们有一个实现类接口 Implementor 和一个抽象类 Abstraction。
// 我们通过创建一个扩展抽象类 RefinedAbstraction 来扩展抽象类的功能，它们都使用了某个实现类的实例对象。
// 然后，我们实例化 Implementor 并通过在 Abstraction 和 RefinedAbstraction 类的声明中传递 Implementor 对象来创建两个具有不同行为的对象。
// 通过将实现和抽象分离开来，我们可以随意地组合实现与抽象，并使其易于扩展。