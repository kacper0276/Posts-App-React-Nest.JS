import { Body, Controller, Post } from '@nestjs/common';
import { userData } from 'src/types/userType';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/register')
  registerUser(@Body() registerData: userData) {
    return this.usersService.registerUser(registerData);
  }

  @Post('/login')
  loginUser(@Body() loginData: userData) {
    return this.usersService.loginUser(loginData);
  }
}
