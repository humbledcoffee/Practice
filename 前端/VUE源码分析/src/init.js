import { compileToFunction } from "./compiler";
import { initState } from "./state";

export function initMixin(Vue) {
  //给vue添加init方法
  Vue.prototype._init = function (options) {
    //用于初始化操作
    //vue vm.$options 就是获取用户的配置
    //加$ 代表都是vue自带的一些配置
    const vm = this;
    this.$options = options; //将用户的选项挂载到实例上

    //初始化状态
    initState(vm);
    //查看用户是否配置el,来决定是否挂载dom
    if (options.el) {
      vm.$mount(options.el); //实现数据的挂载
    }
  };
  Vue.prototype.$mount = function (el) {
    const vm = this;
    el = document.querySelector(el);
    if (!vm.$options.render) {
      //先查找有没有render函数
      let template;
      // 没有render函数看下有没有template
      if (!vm.$options.template && el) {
        //没有写template 但是写了el
        template = el.outerHTML; //包含了自己的html
      } else {
        if (el) {
          template = vm.$options.template;
        }
      }
      //写了template 就用template
      if (template) {
        //这里需要对模版进行编译
        const render = compileToFunction(template);
        vm.$options.render = render;
      }
    }
    //script 标签引用的vue.global.js 这个编译过程是在浏览器运行的
    //runtime是不包含模版编译的,整个编译是打包的时候通过loader来转义.vue文件的,用runtime的时候不能使用template模版编译的
  };
}
