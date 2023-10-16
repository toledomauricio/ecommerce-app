import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private usersRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<any> {
    return await this.usersRepository.find();
  }
}
