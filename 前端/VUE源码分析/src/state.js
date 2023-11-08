import { observe } from "./observe/index.js"

export function initState(vm) {
    const opts = vm.$options //获取所有的选项
    if (opts.data) {
        initData(vm)
    }
}

function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
        get() {
            return vm[target][key]
        },
        set(newValue) {
            if (vm[target][key] === newValue) {
                return
            }
            vm[target][key] = newValue
        }
    })
}

function initData(vm) {
    let data = vm.$options.data

    data = typeof data === 'function' ? data.call(vm) : data //这样data就挂载到vue实例上了
    //将对象放在了实例上
    vm._data = data
    //对数据进行劫持
    observe(data)

    //但是这样用户拿数据的时候都是会从_data里边取,不符合心智模型
    //我们将vm._data用vm做代理 就是再代理一遍
    for (const key in data) {
        proxy(vm, '_data', key)
    }

}