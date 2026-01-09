import { DataSource } from 'typeorm';
import { typeOrmConfig } from './database/typeorm.config';

export const AppDataSource = new DataSource(typeOrmConfig());
