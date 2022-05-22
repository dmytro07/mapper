import { Mapper } from '@automapper/core';
import { InjectMapper, MapInterceptor } from '@automapper/nestjs';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Get(':id')
  @UseInterceptors(MapInterceptor(UsersEntity, CreateUserDto))
  getUser(@Param('id', ParseUUIDPipe) id: string): Promise<GetUserDto> {
    return this.usersService.get(id);
  }

  @Post()
  createUser(@Body() createUSerDto: CreateUserDto): Promise<GetUserDto> {
    return this.usersService.create(createUSerDto);
  }

  @Put(':id')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<GetUserDto[]> {
    return this.usersService.update(updateUserDto, id);
  }
}
