import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { EmailsService } from '../emails/emails.service';
import { IsNumber } from 'class-validator';

class SubmitOrderDto {
  @IsNumber()
  productId: number;
}

@Controller('/orders')
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
    private emailsService: EmailsService,
  ) {}

  @Post()
  public async submitOrder(@Body() submitOrderDto: SubmitOrderDto) {
    const createdOrder = await this.ordersService.submitOrder({
      products: { connect: [{ productId: submitOrderDto.productId }] },
    });

    //✅ Good
    //Services should allow us to share code between modules easily and effortlessly
    //Each Service method should follow a SRP
    await this.emailsService.sendOrderEmail(createdOrder.orderId);

    return {
      message: 'Thanks for you order!',
      orderNumber: createdOrder.orderId,
    };
  }
}
