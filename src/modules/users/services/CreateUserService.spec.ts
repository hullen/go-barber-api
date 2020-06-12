import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createAppointment = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createAppointment.execute({
      name: 'Spaceman',
      email: 'spaceman@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createAppointment = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createAppointment.execute({
      name: 'Spaceman',
      email: 'spaceman@email.com',
      password: '123456',
    });

    await expect(createAppointment.execute({
      name: 'Spaceman',
      email: 'spaceman@email.com',
      password: '123456',
    })).rejects.toBeInstanceOf(AppError);
  });
});
