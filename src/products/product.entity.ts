import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
