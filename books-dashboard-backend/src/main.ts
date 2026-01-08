import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ALLOW_ORIGIN, // Allow only this origin (e.g., your frontend app)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }); // enable cors with default settings
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
