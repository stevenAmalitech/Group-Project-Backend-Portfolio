import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryColumn()
  // @ts-expect-error
  id: number;

  @Column({name:"first_name"})
  // @ts-expect-error
  firstName: string;

  @Column({name: "last_name"})
  // @ts-expect-error
  lastName: string;

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
