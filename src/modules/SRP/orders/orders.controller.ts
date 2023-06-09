import { Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { EmailsService } from '../emails/emails.service';

@Controller('/orders')
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
    private emailsService: EmailsService,
  ) {}

  @Post()
  public async submitOrder() {
    const createdOrder: any = await this.ordersService.submitOrder({});

    //✅ Good
    //Services should allow us to share code between modules easily and effortlessly
    //Each Service method should follow a SRP
    await this.emailsService.sendOrderEmail(createdOrder.orderId);
  }
}
