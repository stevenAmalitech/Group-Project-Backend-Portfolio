import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
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
