import { AutoMap } from '@automapper/classes';
import {
  Column,
  Table,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export class UsersEntity extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @AutoMap()
  @Column
  name: string;

  @AutoMap()
  @Column
  email: string;

  @AutoMap()
  @Column
  password: string;
}
