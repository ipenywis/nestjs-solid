import { Controller, Get, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageS3FetcherService } from './storage-s3-fetcher.service';

@Controller('/storage')
export class StorageController {
  constructor(private storageService: StorageS3FetcherService) {}

  @Get('/file/:filename')
  public getFile(@Param('filename') filename: string) {
    return this.storageService.findFile(filename);
  }
}
