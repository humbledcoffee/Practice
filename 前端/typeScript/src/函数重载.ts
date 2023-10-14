//为什么要用函数重载[好处和应用场景]
type Message = {
    id: number
    type: MessageType
    sendMessage:string
}

enum MessageType {
    Image = 'Image',
    Audio = 'Audio'
}

let messages: Message[] = [
    {id:1,type:MessageType.Image,sendMessage:'泰裤辣'},
    {id:2,type:MessageType.Image,sendMessage:'是的我们有一个孩子'},
    {id:3,type:MessageType.Image,sendMessage:'666666'},
    {id:4,type:MessageType.Image,sendMessage:'777777'}
]

//  这样写 函数的return充满了不确定性 
// 如果返回的是数组 那么久可以用数组的方法 如果是对象 也有对象属性的提示 但混一起 ts根本不知道提示啥 
function searchMsgExample(condition: MessageType | number): Message | undefined | Message[]{
    if (typeof condition === 'number') {
        return messages.find((msg)=>condition === msg.id)
    } else {
        return messages.filter((msg)=> condition === msg.type)
    }
}

// 所以我们要进行函数重载 也就是说 
// 写一组具有相同名字, 不同参数列表和返回值无关丙炔具有一个实现签名和一个或多个重载签名的函数
// 拆解成两个ts注解声明

function searchMsg(condition: MessageType): Message[];//重载签名
function searchMsg(condition: number): Message | undefined;//重载签名 重载签名参数之间不能完全一样
function searchMsg(condition: MessageType | number): Message | undefined | Message[]{ //实现签名 必须包含所有重载签名的类型
    if (typeof condition === 'number') {
        return messages.find((msg)=>condition === msg.id)
    } else {
        return messages.filter((msg)=> condition === msg.type)
    }
}

//这样当我们调用的时候 函数可以根据不同的返回值来提示对应数据类型的方法了

export {}