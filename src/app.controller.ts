import {
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        {
          name: 'ard',
          maxCount: 1,
        },
        { name: 'other' },
      ],
      {
        fileFilter: (req, file, cb) => {
          if (file.mimetype === 'application/pdf') {
            return cb(null, true);
          }
          cb(new Error('Invalid mimetype'), false);
        },
        // storage:
      },
    ),
  )
  upload(
    @UploadedFiles()
    files: {
      ard: Express.Multer.File[];
      name: Express.Multer.File;
    },
  ) {
    return files;
  }
}
