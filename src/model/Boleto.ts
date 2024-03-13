import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Boleto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = undefined!;
}
