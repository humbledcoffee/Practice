import Collection from "./Collection";
import ControllerDecorator from "./ControllerDecorator";
import { InjectConstructor } from "./InjectConstructorDecorator";
import RequestMethodDecorator from "./RequestMethodDecorator";
import { UserService } from "./UserService";
import { Inject } from "./injectDecorator";

//装饰器执行顺序是先执行属性装饰器 再执行方法参数装饰器 再执行方法装饰器 最后执行类装饰器
@ControllerDecorator('/')
class Controller {
    // @Inject('userService')
    // private userService?: UserService

    //依赖注入
    constructor(@InjectConstructor('userService') private userService?: UserService, private count?: string) {

    }


    @RequestMethodDecorator('/login')
    public login() {
        let userServiceClass = Collection.get('userService')
        userServiceClass.login()
    }
}

let controller = new Controller()
controller.login()

export { }