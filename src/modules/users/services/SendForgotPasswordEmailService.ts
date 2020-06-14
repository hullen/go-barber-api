import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../interfaces/repositories/IUsersRepository';
import IUserTokensRepository from '../interfaces/repositories/IUserTokensRepository';
import IMailProvider from '@shared/providers/MailProvider/interfaces/IMailProvider';

// import User from '../infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if(!user) {
      throw new AppError('User not found');
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    await this.mailProvider.sendMail(
      email,
      `Pedido de recuperação da senha: ${token}`,
    );
  }
}

export default SendForgotPasswordEmailService;
