import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { IsNumber } from 'class-validator';
import { PricingService } from '../pricing/pricing.service';
import { SalePricingStrategy } from '../pricing/sale-pricing-strategy.service';
import { OrdersService } from './orders.service';
import { RegularPricingStrategy } from '../pricing/regular-pricing-strategy.service';

class SubmitOrderDto {
  @IsNumber()
  productId: number;
}

@Controller('/LSP/orders')
export class OrdersController {
  constructor(
    @Inject(SalePricingStrategy)
    private pricingService: PricingService,
    private ordersService: OrdersService,
  ) {}

  @Get('/pricing/:id')
  public async calculateOrderPrice(
    @Param('id') id: string,
  ): Promise<{ price: number }> {
    const order = await this.ordersService.findOne(parseInt(id));

    return { price: this.pricingService.calculatePrice(order.totalPrice) };
  }
}
