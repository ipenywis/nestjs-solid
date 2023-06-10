import { Injectable } from '@nestjs/common';

const s3: any = {};

@Injectable()
//Bad ❌
export class StorageService {
  public findAmazonS3File(filename: string) {
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

//Good ✅
//Use an abstract class to provide a common structure for different implementations
//You have to implement each Storage Service using this
export abstract class StorageFetcher {
  abstract findFile(filename: string): any;
}
