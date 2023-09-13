import ControllerDecorator from "./ControllerDecorator";
import RequestMethodDecorator from "./RequestMethodDecorator";
import { UserService } from "./UserService";
import { Inject } from "./injectDecorator";

//装饰器执行顺序是先执行属性装饰器 再执行方法参数装饰器 再执行方法装饰器 最后执行类装饰器
@ControllerDecorator('/')
class Controller {
    @Inject('userService')
    private userService?: UserService

    @RequestMethodDecorator('/login')
    public login() {

    }
}

export { }