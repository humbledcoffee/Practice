// 外观模式（Facade Pattern）是一种结构型设计模式，它为一组复杂的子系统提供了一个更简单的接口。
// 子系统1
class Subsystem1 {
  operation1() {
    console.log('Subsystem1：执行操作1');
  }
}

// 子系统2
class Subsystem2 {
  operation2() {
    console.log('Subsystem2：执行操作2');
  }
}

// 外观类
class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  operation() {
    this.subsystem1.operation1();
    this.subsystem2.operation2();
  }
}

// 客户端代码
const facade = new Facade();
facade.operation(); // Output: Subsystem1：执行操作1，Subsystem2：执行操作2

// 在上述代码中，我们有两个子系统 Subsystem1 和 Subsystem2，它们都提供了复杂的操作。
// 我们通过使用外观模式创建了一个 Facade 类，它的接口更加简单，通过组合 Subsystem1 和 Subsystem2 对象的操作来实现其功能。
// 最后，我们实例化 Facade 类并调用操作方法 operation()，完成了复杂的功能操作。
