//用来存放一组固定常量的序列
//数字枚举 给第一个之后 后面所有值 默认加1
//可以反向取值 比如 Week.MonDay取的值为1 week[1] 取出来是字符串MonDay 注意是值反过来取名 可不是index
//数字枚举底层就是双重映射
enum Week {
    MonDay = 1,
    TuesDay,
    WensDay,
    ThursDay,
    FriDay,
    SaturDay,
    SunDay
}
//字符串枚举是不能反向取值的
enum Weekend {
    MonDay = 'MonDay',
    TuesDay = 'TuesDay',
    WensDay = 'WensDay',
    ThursDay = 'ThursDay',
    FriDay = 'FriDay',
    SaturDay = 'SaturDay',
    SunDay = 'SunDay'
}
//枚举 可以有默认值和自增值,节省编码时间 并且语义更清晰,可读性更强 a


export {}