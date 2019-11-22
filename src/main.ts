import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { ValidationPipe } from '@nestjs/common';
import {CustomLoggerModule} from './custom-logger/custom-logger.module'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.enableCors();
  //app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(CustomLoggerModule));
  
  const config = new ConfigService();
  const port = config.get('APP_PORT') || 3000;

  await app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
}
bootstrap();
