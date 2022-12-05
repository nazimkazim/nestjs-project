import { Column, Table, Model, DataType, BelongsToMany } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-role.model";


interface UserCreationAttrs {
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
}
@Table({
    tableName: "users",
})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,

    })
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'User email'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @ApiProperty({example: 'password', description: 'User password'})
    @Column({
        type: DataType.STRING,
    })
    password: string;

    @ApiProperty({example: 'false', description: 'User ban status'})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    banned: boolean;

    @ApiProperty({example: 'User was banned', description: 'User ban reason'})
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}