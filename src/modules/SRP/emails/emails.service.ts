import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailsService {
  public async sendOrderEmail(orderId: number) {
    console.log(`Sending order email for order ${orderId}`);
    //TODO: Send Email logic here...
  }
}
