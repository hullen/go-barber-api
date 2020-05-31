import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../interfaces/repositories/IUsersRepository';
import IStorageProvider from '@shared/providers/StorageProvidere/interfaces/IStorageProvider';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  userId: string;
  avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('DiskStorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ userId, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(userId);

    if(!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if(user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const fileName = await this.storageProvider.saveFile(avatarFilename);

    user.avatar = fileName;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
