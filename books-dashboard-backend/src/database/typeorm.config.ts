import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig = (): DataSourceOptions => ({
  type: 'sqlite',
  database: join(process.cwd(), process.env.DB_NAME ?? 'db.sqlite'),
  entities: [join(__dirname, '../**/*.entity.{ts,js}')],
  migrations: [join(__dirname, '../migrations/*.{ts,js}')],
  synchronize: !(process.env.NODE_ENV === 'production'),
});
