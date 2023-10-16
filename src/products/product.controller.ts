import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}
