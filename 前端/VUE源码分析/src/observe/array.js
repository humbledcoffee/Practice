let oldArrayProto = Array.prototype //获取数组的原型

//newArrayProto.__proto__ = oldArrayProto
export let newArrayProto = Object.create(oldArrayProto);

let methods = [
  //找到所有的变异方法(改变原数组的方法)
  "push",
  "pop",
  "shift",
  "unshift",
  "sort",
  "splice",
];

methods.forEach((method) => {
  newArrayProto[method] = function (...args) {
    //重写了数组的方法

    const result = oldArrayProto[method].call(this, ...args); //函数的劫持 切片编程

    //我们需要对新增的数据再次进行劫持
    let Inserted;
    let ob = this.__ob__;
    switch (method) {
      case "push": //追加元素
      case "unshift": //追加元素
        Inserted = args;
        break;
      case "splice":
        Inserted = args.slice(2);
      default:
        break;
    }
    if (Inserted) {
      //对新增的内容再次进行劫持
      ob.observerArray(Inserted);
    }

    return result;
  };
});