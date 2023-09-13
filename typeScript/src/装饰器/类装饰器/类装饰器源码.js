// 1.底层JS 组合装饰器和目标类 __decorate函数
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    //首先判断arguments 参数个数
    var argsNum = arguments.length;
    //targetInfo 被装饰器修饰的目标
    //argsNum=2 装饰器修饰的是类或者构造器参数,targetInfo=target
    //argsNum=4 装饰器修饰的是方法,targetInfo=该方法的数据
    //argsNum=2 装饰器修饰的是方法参数或者属性,targetInfo=undefined
    var targetInfo =
      argsNum < 3
        ? target
        : desc == null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc;
    //decorator保存装饰器数组元素
    var decorator;
    //元数据信息,支持reflect-metadata元数据

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      targetInfo = Reflect.decorate(decorators, target, key, desc);
    } else {
      //装饰器循环,倒着循环,说明同一个目标上有多个装饰器,执行顺序是倒着执行
      for (var i = decorators.length - 1; i >= 0; i--) {
        if ((decorator = decorators[i])) {
          //如果参数小于3[decorator为类装饰器或者构造器参数装饰器]执行decorator(targetInfo)直接执行decorate
          //若果参数大于3[decorator为方法装饰器]直接执行decorator(target,key,targetInfo)
          //如果参数等于3 [decorator为方法参数装饰器或者属性装饰器]直接执行desc
          //targetInfo最终为哥哥装饰器执行后的返回值,如果没有返回值,直接返回第
          targetInfo =
            (argsNum < 3
              ? decorator(targetInfo)
              : argsNum > 3
              ? decorator(target, key, targetInfo)
              : decorator(target, key)) || target;
        }
      }
      return (
        argsNum > 3 &&
          targetInfo &&
          Object.defineProperty(target, key, targetInfo),
        targetInfo
      );
    }
  };

//带参数的装饰器

function 方法装饰器(方法装饰器传参) {
    return function (目标类原型对象, 目标类方法名, 目标类方法的数据属性) {
        const 目标类方法 = 目标类方法的数据属性?.value
        目标类方法的数据属性?.value = function (参数) {
            参数 = 参数.map((每个参数) => {
                if (typeof 每个参数 === 'string') return 每个参数.replace(/\s+/g, '') //就是去除空格 没什么实际意义 体现前置拦截可以做的事情
                return 每个参数
            })
            console.log('前置拦截')
            目标类方法.apply(this, 参数)
            console.log('后置拦截')
        }
    }
}

var 装饰器修饰的类 = function () {
  function 装饰器修饰的类() {
    this.name = "下单";
  }
  装饰器修饰的类.prototype.buy = function () {
    console.log(this.name + "购买");
  };
  装饰器修饰的类.prototype.placeOrder = function () {
    console.log(this.name + "下单购买");
  };
  装饰器修饰的类 = __decorate([方法装饰器], 装饰器修饰的类);
  return 装饰器修饰的类;
};
