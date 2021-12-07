import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("products")
export default class Product {
  @PrimaryColumn()
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
