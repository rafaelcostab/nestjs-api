import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductSlugAlreadyExistsErrorFilter } from './products/filters/product-slug-already-exists.filter';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundErrorFilter } from './comoon/filters/not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new ProductSlugAlreadyExistsErrorFilter(),
    new NotFoundErrorFilter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
