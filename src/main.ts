import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { QueueModule } from './queue/queue.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.connectMicroservice({
    transport: Transport.REDIS as any,
    options: {
      url: '127.0.0.1:6379',
    },
  });
  await app.startAllMicroservices();
  await app.listen(3003);

  // const app = await NestFactory.create(AppModule, { cors: true });
  // app.listen(3003);
}
bootstrap();
