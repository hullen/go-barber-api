import { injectable, inject } from 'tsyringe';
import { isAfter, addHours } from 'date-fns';

import IUsersRepository from '../interfaces/repositories/IUsersRepository';
import IUserTokensRepository from '../interfaces/repositories/IUserTokensRepository';
import IHashProvider from '@modules/users/providers/HashProvider/interfaces/IHashProvider';

import AppError from '@shared/errors/AppError';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if(!userToken) {
      throw new AppError('User token not found');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if(!user) {
      throw new AppError('User not found');
    }

    const tokenCreatedAt = userToken.created_at;
    const tokenExpires = addHours(tokenCreatedAt, 2);

    if(isAfter(Date.now(), tokenExpires)) {
      throw new AppError('Sorry, token expired');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
