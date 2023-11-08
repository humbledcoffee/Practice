import { newArrayProto } from "./array.js";

class Observer {
  constructor(data) {
    //Object.defineProperty只能劫持已经存在的属性,后增的或删除的 是感应不到的
    //vue为此单独写了一些api $set $delete
    //将实例挂载到自身上, 方便数组方法劫持到后, 调用observe方法;
    Object.defineProperty(data, "__ob__", {
      value: this,
      enumerable: false, //如果可以枚举 走observe方法就会死循环了 所以这里设定成不可枚举
    });
    if (Array.isArray(data)) {
      //在这里我们可以重写数组中的方法 7个变异方法 是可以修改数组本身的
      data.__proto__ = newArrayProto; //要保留数组原来的原型链 不能断掉
      this.observeArray(data); //如果数组中放置的是对象 是可以被监控到的
    } else {
      this.walk(data);
    }
  }
  walk(data) {
    //循环对象 对属性依次劫持 vue2等于说把属性重写了 所以性能会比proxy差一点
    Object.keys(data).forEach((key) => defineReactive(data, key, data[key]));
  }
  observeArray(data) {
    //观测数组
    data.forEach((item) => observe(item));
  }
}

export function defineReactive(target, key, value) {
  //闭包 属性劫持具体代码
  observe(value);
  Object.defineProperty(target, key, {
    //拦截用户操作
    get() {
      //取值的时候会执行get
      return value;
    },
    set(newValue) {
      //修改的时候会执行set
      if (newValue !== value) return;
      value = newValue;
    },
  });
}

export function observe(data) {
  //对这个对象进行劫持
  if (typeof data !== "object" || data == null) {
    return; //只对对象进行劫持
  }

  //如果一个对象被劫持过了.那就不需要再被劫持了
  //要判断一个对象是否被劫持过,可以增添一个实例,用实例来判断是否被劫持过
  if (data.__ob__ instanceof Observer) {
    return data.__ob__;
  }

  return new Observer(data);
}
