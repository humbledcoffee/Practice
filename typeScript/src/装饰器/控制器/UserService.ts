//编写一个业务类
export class UserService {
    pName: string = '人民'
    constructor() {
        console.log('创建UserService类实例')
    }
    public login() {
        console.log(this.pName + '登录')
    }
}