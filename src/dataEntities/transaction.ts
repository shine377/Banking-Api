import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

export enum transactionTypes {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("transaction")
export class Transaction extends BaseEntity {

    @PrimaryColumn()
    id!: string;

    @Column()
  name!: string;

  @Column({
    type: "enum",
    enum: transactionTypes,
  })
  type!: string;

  @Column()
  balance!: number;

  @ManyToOne(
    () => User,
    user => user.transaction
  )

  @JoinColumn({
    name:"User_Id"
  })

  user!:User
}
