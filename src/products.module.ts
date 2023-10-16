
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './products/product.service';
import { ProductController } from './products/product.controller';
import { Product } from './products/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductsModule {}
