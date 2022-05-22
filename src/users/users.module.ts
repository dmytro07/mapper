import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersEntity } from './entities/users.entity';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { UsersProfileService } from './services/users-profile.service';

@Module({
  imports: [SequelizeModule.forFeature([UsersEntity])],
  providers: [UsersService, UsersProfileService],
  controllers: [UsersController],
})
export class EscrowsModule {}
