import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  name: string;

  @AutoMap()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
