import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
/**
 *  * Bootstraps the NestJS application, sets up global validation pipe and Swagger docs
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true }));
 
  const config = new DocumentBuilder()
  .setTitle("NestJS Mestery - Blog App API")
  .setDescription("Use the build API URLs as http://localhost:5000")
  .addServer('http://localhost:5000', "Localhost")
  .setBasePath('api/v1')
  .setVersion("1.0")
  .build()

  const document = SwaggerModule.createDocument(app, config )

  SwaggerModule.setup("api-doc", app, document)
  
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
