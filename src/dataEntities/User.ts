import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Transaction } from "./transaction";

@Entity("user")
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

  @OneToMany(
    () => Transaction,
    transaction => transaction.user
  )

  transaction! : Transaction[]
}