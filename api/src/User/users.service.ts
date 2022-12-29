import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/dtos/user.entity';
import { userData } from 'src/types/userType';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async registerUser(registerData: userData) {
    const saltOrRounds = 10;

    const sameUser = await this.usersRepository.findBy({
      login: registerData.login,
    });

    if (
      registerData.password === registerData.repeat_password &&
      !Boolean(sameUser.length)
    ) {
      const hash = await bcrypt.hashSync(registerData.password, saltOrRounds);

      const registerUserData = {
        login: registerData.login,
        password: hash,
      };

      this.usersRepository.save(registerUserData);
      return { message: 'Pomyślnie zarejestrowano' };
    } else {
      return {
        message: 'Hasła nie są takie same / taki użytkownik już istnieje',
      };
    }
  }

  async loginUser(loginData: userData) {
    const { login } = loginData,
      { password } = loginData;
    const userExist = await this.usersRepository.findBy({
      login: login,
    });

    if (Boolean(userExist.length)) {
      const comparePassword = await bcrypt.compare(
        password,
        userExist[0].password,
      );

      if (comparePassword) {
        return { loginStatus: login };
      } else {
        return { message: 'Niepoprawny login lub hasło' };
      }
    } else {
      return { message: 'Niepoprawny login lub hasło' };
    }
  }
}
