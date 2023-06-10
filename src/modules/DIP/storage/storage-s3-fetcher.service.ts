import { Injectable } from '@nestjs/common';
import { StorageFetcher } from './storage.service';

//Your S3 Store instance
const s3: any = {};

//Good ✅
//This implements S3 API for the StorageFetcher
//Allows us to adhere to DIP
@Injectable()
export class StorageS3FetcherService implements StorageFetcher {
  public findFile(filename: string) {
    //Custom S3 Implementation here
    // Set up S3 getObject parameters
    const params = {
      Bucket: 'STORAGE',
      Key: process.env.AWS_key,
    };

    // Fetch the file from S3
    s3.getObject(params, (err, data) => {
      if (err) {
        console.error(err);
        throw new Error('Error fetching the file from S3');
      } else {
        return data.Body; // Return the file data in the response
      }
    });
  }
}
