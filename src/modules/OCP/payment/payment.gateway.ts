import { Order } from '@prisma/client';

// ✅ Good
//Extending the payment service without modifying existing code (Open-Closed Principle)
export abstract class PaymentGateway {
  abstract processPayment(order: Order): void;
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

//Maybe you want to add support for a new payment Method 🤔 👇
export class ApplePayGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process ApplePay payment
  }
}

export enum PAYMENT_METHOD {
  CREDIT_CARD = 'credit-card',
  PAYPAL = 'paypal',
  Bitcoin = 'bitcoin',
}
