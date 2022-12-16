import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  registerUser(username: string, password: string, confirm_passowrd: string) {
    return this.usersService.registerUser(username, password, confirm_passowrd);
  }
}
