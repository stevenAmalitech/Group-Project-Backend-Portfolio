import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn()
  // @ts-expect-error
  id: number;

  @Column()
  // @ts-expect-error
  name: string;

  @Column()
  // @ts-expect-error
  description: string;

  @Column()
  // @ts-expect-error
  sku: string;

  @Column()
  // @ts-expect-error
  price: number;
}
