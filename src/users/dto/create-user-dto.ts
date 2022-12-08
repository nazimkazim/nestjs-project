import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user email", description: "User email" })
  @IsString({
    message: "Must be a string",
  })
  @IsEmail({}, { message: "Must be a valid email" })
  readonly email: string;

  @ApiProperty({ example: "password", description: "User password" })
  @IsString({
    message: "Must be a string",
  })
  @Length(4, 16, {
    message: "Must be between 4 and 16 characters",
  })
  readonly password: string;
}
