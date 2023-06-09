import { Injectable } from '@nestjs/common';
import { EmailsService } from '../emails/emails.service';

@Injectable()
export class OrdersService {
  constructor(private emailsService: EmailsService) {}

  async submitOrder(orderDto: any) {
    //Save order on the Database
    //TODO: Add Database saving for order

    //❌ Bad
    //Here we'are sending Order email inside the OrdersService which should
    //Have one responsibility (Taking care of Orders)
    this.emailsService.sendOrderEmail(1);

    return {};
  }
}
