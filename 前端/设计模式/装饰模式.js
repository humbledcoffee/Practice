// 装饰模式（Decorator Pattern）是一种结构型设计模式，它允许在不影响其他对象的情况下，动态地将功能添加到对象中.
// 抽象组件类
class Component {
  operation() {
    console.log('Component：基础操作');
  }
}

// 具体组件类
class ConcreteComponent extends Component {
  operation() {
    console.log('ConcreteComponent：具体操作');
  }
}

// 抽象装饰器类
class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }

  operation() {
    this.component.operation();
  }
}

// 具体装饰器类
class ConcreteDecoratorA extends Decorator {
  operation() { 
    super.operation();
    console.log('ConcreteDecoratorA：添加操作'); 
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() { 
    super.operation();
    console.log('ConcreteDecoratorB：添加操作'); 
  }
}

// 使用装饰器组合对象
const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);
decoratorB.operation();

// 在上述代码中，我们有一个抽象组件类 Component 和一个具体组件类 ConcreteComponent。
// 我们创建了两个装饰器类 ConcreteDecoratorA 和 ConcreteDecoratorB，它们都继承自 Decorator 类，并且可以添加新的行为到被装饰的对象上。
// 最后，我们实例化 ConcreteComponent 类, 将其封装在 ConcreteDecoratorA 和 ConcreteDecoratorB 类中，最终组成一个具有多个操作的对象。