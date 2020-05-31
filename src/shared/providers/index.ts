import { container } from 'tsyringe';

import IStorageProvider from './StorageProvidere/interfaces/IStorageProvider';
import DiskStorageProvider from './StorageProvidere/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'DiskStorageProvider',
  DiskStorageProvider
);
