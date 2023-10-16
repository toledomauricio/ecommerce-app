import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { ProductRepository } from './products/product.repository';
import { ProductService } from './products/product.service';
import { ProductController } from './products/product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, ProductRepository]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class AppModule {}
