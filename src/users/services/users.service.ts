import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/shared/services/base.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { GetUserDto } from '../dto/get-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class UsersService extends BaseService<
  typeof UsersEntity,
  GetUserDto,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectModel(UsersEntity) private readonly usersEntity: typeof UsersEntity,
  ) {
    super(usersEntity);
  }
}
