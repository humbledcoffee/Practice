// 组合模式（Composite Pattern）是一种结构型设计模式，它使用树形结构来表示对象的部分-整体层次结构，并使用户能够以统一的方式处理单个对象和对象组合。
// 抽象构件
class Component {
  constructor(name) {
    this.name = name;
  }

  operation() {
    console.log(`Component ${this.name}：执行操作`);
  }

  add(component) {
    console.log("Component：不支持的操作");
  }

  remove(component) {
    console.log("Component：不支持的操作");
  }

  getChild(index) {
    console.log("Component：不支持的操作");
  }
}

// 叶子节点
class Leaf extends Component {
  constructor(name) {
    super(name);
  }
}

// 树枝节点
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
  }

  getChild(index) {
    return this.children[index];
  }
}

// 使用组合模式
const root = new Composite("根");
const branch1 = new Composite("树枝1");
const branch2 = new Composite("树枝2");
const leaf1 = new Leaf("叶子1");
const leaf2 = new Leaf("叶子2");
const leaf3 = new Leaf("叶子3");

root.add(branch1);
root.add(branch2);
branch1.add(leaf1);
branch1.add(leaf2);
branch2.add(leaf3);

root.operation(); // Output: Component 根：执行操作
branch1.operation(); // Output: Component 树枝1：执行操作

branch1.remove(leaf2);
branch2.operation(); // Output: Component 树枝2：执行操作

root.getChild(0).operation(); // Output: Component 树枝1：执行操作

// 在上述代码中，我们有一个抽象构件 Component，通过创建两个具体构建 Leaf 和 Composite 来扩展抽象构件的功能。 
// Composite 保持着一个子对象的数组，并实现了在包含其他组件的能力。
// 然后，我们使用所有这些组件来建立一个树形结构， 父节点模型是 Component 对象，而子节点可以是 Component 对象或 Composite 对象。
// 最终，我们可以通过调用操作方法来进行操作。