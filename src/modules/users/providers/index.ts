import { container } from 'tsyringe';

import IHashProvider from './HashProvider/interfaces/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.register<IHashProvider>('HashProvider', BCryptHashProvider);
