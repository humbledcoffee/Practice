//typeof 用来检测一个变量或一个对象的数据类型
//typeof检测范围 string number bigint boolean symbol undefined object function
//typeof 检测数组 会显示object new出来的也一样

//替代typeof的方法 
console.log(Object.prototype.toString.call([1, 2]))

//instanceof

//in

// 字面量相等判断 typeof '1' === 'string'

//ts自定义类型守卫

class Parent{
    method() {
        
    }
}

class A extends Parent{
    methodA() {
        
    }
}

class B extends Parent{
    methodB() {
        
    }
}

class Customer{
    runMethod(ABMethod: A | B) {
        if (isA(ABMethod)) {
            ABMethod.methodA() //为true 并且is A的情况下 就只会提示A类的方法了
        }
    }
}

function isA(ABMethod: A | B): ABMethod is A {
    return ABMethod instanceof A
}