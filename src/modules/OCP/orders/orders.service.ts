import { Injectable } from '@nestjs/common';
import { Order, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService, // private emailsService: EmailsService,
  ) {}

  async submitOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    const createdOrder = await this.prisma.order.create({ data });
    //Save order on the Database
    //TODO: Add Database saving for order

    //❌ Bad
    //Here we'are sending Order email inside the OrdersService which should
    //Have one responsibility (Taking care of Orders)
    // this.emailsService.sendOrderEmail(createdOrder.orderId);

    return createdOrder;
  }
}
