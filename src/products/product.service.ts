import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<any> {
    return await this.productsRepository.find();
  }

  async insertFakeProducrs(): Promise<any> {
    const productsToSeed = [
      {
        name: 'Smart TV LED 55" 4K',
        description:
          'Uma Smart TV de alta qualidade com resolução 4K e recursos inteligentes.',
        price: 1499.99,
      },
      {
        name: 'Liquidificador 800W',
        description:
          'Um liquidificador potente para preparar sucos e smoothies.',
        price: 69.99,
      },
      {
        name: 'Notebook Dell XPS 15',
        description:
          'Um notebook premium com tela de alta resolução e desempenho excepcional.',
        price: 1899.99,
      },
      {
        name: 'Geladeira Frost Free 380L',
        description:
          'Uma geladeira espaçosa com tecnologia frost-free para evitar o acúmulo de gelo.',
        price: 999.99,
      },
      {
        name: 'Sofá de Couro Reclinável',
        description:
          'Um sofá de couro reclinável para proporcionar conforto e elegância na sala de estar.',
        price: 799.99,
      },
      {
        name: 'Máquina de Lavar Roupa 10kg',
        description:
          'Uma máquina de lavar de grande capacidade para facilitar a tarefa de lavagem.',
        price: 499.99,
      },
      {
        name: 'Forno Micro-ondas 30L',
        description:
          'Um micro-ondas espaçoso com várias funções de cozimento rápido.',
        price: 129.99,
      },
      {
        name: 'Caixa de Som Bluetooth Portátil',
        description:
          'Uma caixa de som portátil com conectividade Bluetooth para música em qualquer lugar.',
        price: 59.99,
      },
      {
        name: 'Cama King Size com Cabeceira',
        description:
          'Uma cama king size com cabeceira estofada para noites de sono confortáveis.',
        price: 899.99,
      },
      {
        name: 'Aspirador de Pó Robô',
        description:
          'Um aspirador de pó robô autônomo para manter a casa limpa sem esforço.',
        price: 249.99,
      },
    ];

    for (const productData of productsToSeed) {
      const product = new Product();
      product.name = productData.name;
      product.description = productData.description;
      product.price = productData.price;

      await this.productsRepository.save(product);
    }
  }
}
