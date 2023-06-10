import { Injectable } from '@nestjs/common';
import { StorageFetcher } from './storage.service';

//Your Google Cloud Storage instance
const cloudStorage: any = {};

//Good ✅
//This implements the Google Cloud Storage fetching API
@Injectable()
export class StorageCSFetcherService implements StorageFetcher {
  public async findFile(filename: string) {
    //Google Cloud Storage specific implementation
    //To adhere to DIP
    // Get the file reference
    const bucket = cloudStorage.bucket('STORAGE');
    const file = bucket.file(filename);

    // Download the file
    const [fileContent] = await file.download();

    return fileContent;
  }
}
