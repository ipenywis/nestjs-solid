// sale-pricing-strategy.service.ts
import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Injectable()
//Bad ❌
export class BadSalePricingStrategy extends PricingService {
  calculatePrice(basePrice: number): number {
    // Logic to calculate the sale price
    return basePrice * 0.8; // 20% discount
  }
}

@Injectable()
//Bad ❌
export class SalePricingStrategy implements PricingService {
  calculatePrice(basePrice: number): number {
    // Logic to calculate the sale price
    return basePrice * 0.8; // 20% discount
  }
}
