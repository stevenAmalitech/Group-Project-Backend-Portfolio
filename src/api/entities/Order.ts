import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  // @ts-expect-error
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  // @ts-expect-error
  userId: string;

  @Column({ type: "json" })
  // @ts-expect-error
  items: object;

  @Column({ type: "int" })
  // @ts-expect-error
  total: number;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  // @ts-expect-error
  createdAt: number;
}
