import { Order } from '@prisma/client';

// ✅ Good
//Extending the payment service without modifying existing code (Open-Closed Principle)
export interface PaymentGateway {
  processPayment(order: Order): void;
}

export class CreditCardGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process credit card payment
  }
}

export class PayPalGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process PayPal payment
  }
}

export class BitcoinGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process Bitcoin payment
  }
}

export enum PAYMENT_METHOD {
  CREDIT_CARD = 'credit-card',
  PAYPAL = 'paypal',
  Bitcoin = 'bitcoin',
}
