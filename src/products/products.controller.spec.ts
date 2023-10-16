import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';
import * as request from 'supertest';
import { HttpStatus } from '@nestjs/common';

describe('Controlador de Produtos', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('deve retornar produtos da segunda página', () => {
    return request(app.getHttpServer())
      .get('/products?page=2&perPage=5')
      .expect(HttpStatus.OK)
      .expect((response) => {
        const products = response.body;
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBe(5);

        products.forEach((product) => {
          expect(product).toHaveProperty('id');
          expect(product).toHaveProperty('name');
          expect(product).toHaveProperty('description');
          expect(product).toHaveProperty('price');
          expect(product).toHaveProperty('imageUrl');
        });

        if (response.header['x-total-count']) {
          expect(response.header['x-total-count']).toBeGreaterThan(5);
        }
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
