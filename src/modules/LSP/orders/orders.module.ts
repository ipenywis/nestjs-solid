import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PrismaModule } from 'src/prisma.module';
import { RegularPricingStrategy } from '../pricing/regular-pricing-strategy.service';
import { SalePricingStrategy } from '../pricing/sale-pricing-strategy.service';
import { PricingModule } from '../pricing/pricing.module';

@Module({
  imports: [PrismaModule, PricingModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class LSPOrdersModule {}
