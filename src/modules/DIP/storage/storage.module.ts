import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageFetcher, StorageService } from './storage.service';
import { StorageS3FetcherService } from './storage-s3-fetcher.service';
import { StorageCSFetcherService } from './storage-cs-fetcher.service';

//Inject Different types of Storage implementations depending on what you need!
@Module({
  controllers: [StorageController],
  providers: [
    { provide: StorageFetcher, useClass: StorageCSFetcherService },
    // StorageS3FetcherService,
  ],
})
export class StorageModule {}
