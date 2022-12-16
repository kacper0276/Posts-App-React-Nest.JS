import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/dtos/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async registerUser(
    username: string,
    password: string,
    confirm_password: string,
  ) {
    console.log(username, password, confirm_password);
  }
}
