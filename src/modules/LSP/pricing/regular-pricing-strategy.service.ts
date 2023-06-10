// regular-pricing-strategy.service.ts
import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Injectable()
//Bad ❌
export class BadRegularPricingStrategy extends PricingService {
  //You can just rely on the base implementation from PricingService
  //Without being forced to have a specific implementation for RegularPricing
}

@Injectable()
//Good ✅
export class RegularPricingStrategy implements PricingService {
  calculatePrice(basePrice: number): number {
    // Logic to calculate the regular price
    return basePrice;
  }

  public fetchInternalPricing(): void {}
}
