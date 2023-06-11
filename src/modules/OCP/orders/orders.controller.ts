import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { IsNumber } from 'class-validator';
import { PaymentService } from '../payment/payment.service';
import { CreditCardGateway, PAYMENT_METHOD } from '../payment/payment.gateway';

class SubmitOrderDto {
  @IsNumber()
  productId: number;
}

@Controller('/orders')
export class OrdersController {
  constructor(private paymentService: PaymentService) {
    this.paymentService.registerPaymentGateway(
      PAYMENT_METHOD.CREDIT_CARD,
      new CreditCardGateway(),
    );
  }
}
