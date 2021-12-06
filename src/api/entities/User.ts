import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryColumn()
  // @ts-expect-error
  id: number;

  @Column()
  // @ts-expect-error
  first_name: string;

  @Column()
  // @ts-expect-error
  last_name: string;

  @Column()
  // @ts-expect-error
  email: string;

  @Column()
  // @ts-expect-error
  password: string;

  @Column()
  // @ts-expect-error
  telephone: string;

  @Column()
  // @ts-expect-error
  address: string;
}
