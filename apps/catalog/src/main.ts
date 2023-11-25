import { NestFactory } from '@nestjs/core';
import { CatalogModule } from './catalog.module';

async function bootstrap() {
  const app = await NestFactory.create(CatalogModule);
  await app.listen(3002, () => console.log('Catalog Service Started'));
}
bootstrap();
