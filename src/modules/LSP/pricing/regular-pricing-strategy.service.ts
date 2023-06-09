// regular-pricing-strategy.service.ts
import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Injectable()
//Bad ❌
export class BadRegularPricingStrategy extends PricingService {
  calculatePrice(basePrice: number): number {
    // Logic to calculate the regular price
    return basePrice;
  }
}

@Injectable()
//Good ✅
export class RegularPricingStrategy extends PricingService {
  calculatePrice(basePrice: number): number {
    // Logic to calculate the regular price
    return basePrice;
  }
}
