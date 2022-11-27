import { User } from './user';

export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export interface IUsersService {
  get(id: number, name?: string): User;
  create(userCreationParams: UserCreationParams): User;
}
