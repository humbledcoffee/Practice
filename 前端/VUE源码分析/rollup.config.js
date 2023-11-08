import babel from 'rollup-plugin-babel'
//rollup默认可以导出一个对象 作为打包的配置文件
export default {
    input: './src/index.js', //入口
    output: {
        file: './dist/vue.js', //出口
        name: 'Vue', //global添加一个vue实例
        format: 'umd', //esm es6模块 cjs模块 iife自执行函数 umd amd
        sourcemap: true
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'//排除node_modules所有文件
        })
    ]
}