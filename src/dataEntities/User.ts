import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("newUser")
export class User extends BaseEntity {

  @PrimaryColumn({
    type:"uuid"
  })
  id!: string;

  @Column()
  name!: string;

  @Column({
    unique: true,
    length: 10,
  })
  account_number!: number;

  @Column({
    type: "numeric",
  })
  balance!: number;
}