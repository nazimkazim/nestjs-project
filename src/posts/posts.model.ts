import {
  Column,
  Table,
  Model,
  DataType,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-role.model";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
  id: number;
  title: string;
  content: string;
  userId: number;
  image: string;
}
@Table({
  tableName: "posts",
})
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
  })
  content: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @BelongsTo(() => User)
  author: User;
}
