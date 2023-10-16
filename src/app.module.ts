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
      host: 'vultr-prod-9f1cd11f-e7d0-45f6-9399-19e0214d02e2-vultr-prod-f887.vultrdb.com',
      port: 16751,
      username: 'vultradmin',
      password: 'AVNS_hbZBxDDumg2uQFX2BA-',
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
