import { initState } from "./state"

export function initMixin(Vue) { //给vue添加init方法
    Vue.prototype._init = function (options) { //用于初始化操作
        //vue vm.$options 就是获取用户的配置
        //加$ 代表都是vue自带的一些配置
        const vm = this
        this.$options = options //将用户的选项挂载到实例上

        //初始化状态
        initState(vm)
    }
}