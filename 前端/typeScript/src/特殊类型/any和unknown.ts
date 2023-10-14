//相同点 any和unknown是任何类的父类,所以任何类型的变量都可以赋值给any类型或unknown类型的变量
//不同点
//1.any也可以是任何类的子类 但是unknown不可以,所以any类型的变量都可以赋值给其他类型的变量
//2.不能拿unknown类型的变量来获取任何属性和方法,但any类型的变量可以获取任意名称的属性和任意名称的方法
let data: any = undefined //根类型的话 null和undefined是不行的 any和unknown都可以
let data2:unknown = null  //但是被unknown注解之后 使用任何数据类型的方法属性都会报错 unknown一般是不确定的参数
export {}