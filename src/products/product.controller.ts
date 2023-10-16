import { Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('perPage', ParseIntPipe) perPage: number = 5,
  ) {
    const products = await this.productService.getProductsByPage(page, perPage);
    return products;
  }

  @Post('seed')
  insertFakeProducts() {
    return this.productService.insertFakeProducrs();
  }
}
