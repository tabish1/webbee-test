import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";

@Table({
  updatedAt: false,
})
export default class Event extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  declare name: string;

  @Column({ type: "datetime" } as ModelAttributeColumnOptions)
  declare createdAt: Date;
}
