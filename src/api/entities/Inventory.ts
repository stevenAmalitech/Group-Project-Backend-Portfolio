import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Product from "./Product";

@Entity("product_inventory")
export default class Inventory {
  @PrimaryGeneratedColumn()
  // @ts-expect-error
  id: number;

  @ManyToOne(() => Product, (product) => product.id, {})
  @JoinColumn({ name: "product_id" })
  // @ts-expect-error
  productId: Product;

  @Column({ type: "int" })
  // @ts-expect-error
  quantity: number;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  // @ts-expect-error
  createdAt: number;
}
