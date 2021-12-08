import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Inventory from "./Inventory";

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

  // @OneToMany(() => Inventory, (inventory) => inventory.product_id)
  // // @ts-expect-error
  // inventory: Inventory;
}
