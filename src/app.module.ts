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
      host: '',
      port: 16751,
      username: '',
      password: '',
      database: 'defaultdb',
      entities: [Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, ProductRepository]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
