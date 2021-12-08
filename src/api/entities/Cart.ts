import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity("carts")
export default class Cart {
  @PrimaryGeneratedColumn()
  // @ts-expect-error
  id: number;

  @Column({ unique: true, name: "user_id" })
  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  // @ts-expect-error
  userId: string;

  @Column("json")
  // @ts-expect-error
  items: object;

  @Column("int")
  // @ts-expect-error
  total: number;
}
