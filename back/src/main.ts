import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const configService: ConfigService = app.get(ConfigService);
  const PORT = configService.get("APP_PORT");
  const HOST = configService.get("APP_HOST");
  await app.listen(PORT,HOST);
  console.log(`Сервер запушен на http://${HOST}:${PORT}/api`);
}
bootstrap();
