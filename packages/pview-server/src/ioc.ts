import { IocContainer } from "tsoa";
import { UsersController } from "./users/usersController";
import { RootController } from "./root/rootController";
import { UsersService } from "./users/usersService";

const usersService = new UsersService();

export const iocContainer: IocContainer = {
  get: <T>(controller: any): T => {
//    get: <T>(controller: { prototype: T }): T => {
    if (controller === UsersController) {
      return new UsersController(usersService) as T;
    }
    if (controller === RootController) {
      return new RootController() as T;
    }
    // return container.resolve<T>(controller as never);
    throw new Error(`unknown type ${controller.prototype}`);
  },
}
