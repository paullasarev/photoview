// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  Tags,
  SuccessResponse,
} from 'tsoa';
import { User } from './user';
import { UsersService } from './usersService';
import { IUsersService, UserCreationParams } from "./usersTypes";

@Tags("Users")
@Route('users')
export class UsersController extends Controller {

  constructor(public usersService: IUsersService) {
    super();
  }

  @Get('{userId}')
  public async getUser(
    @Path() userId: number,
    @Query() name?: string,
  ): Promise<User> {
    return this.usersService.get(userId, name);
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    this.usersService.create(requestBody);
    return;
  }
}
