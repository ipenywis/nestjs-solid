import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { RegularPricingStrategy } from './regular-pricing-strategy.service';
import { SalePricingStrategy } from './sale-pricing-strategy.service';

@Module({
  providers: [RegularPricingStrategy, SalePricingStrategy],
  exports: [RegularPricingStrategy, SalePricingStrategy],
})
export class PricingModule {}
