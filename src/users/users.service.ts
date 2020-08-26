import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Rick' },
  ];

  findById(userId: number): User {
    return this.users.find(({ id }) => userId === id);
  }
}
