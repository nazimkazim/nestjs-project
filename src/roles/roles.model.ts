import { Column, Table, Model, DataType, BelongsToMany } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-role.model";


interface RoleCreationAttrs {
    value: string;
    description: string;
}
@Table({
    tableName: "roles",
})

export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,

    })
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Unique role value'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    value: string;

    @ApiProperty({example: 'Administrator', description: 'Role description'})
    @Column({
        type: DataType.STRING,
    })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}