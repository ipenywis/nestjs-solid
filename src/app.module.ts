import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import './prisma.service';
import { PrismaService } from './prisma.service';

//SRP
import { ProductsModule } from './modules/SRP/products/products.module';
import { OrdersModule } from './modules/SRP/orders/orders.module';

@Module({
  imports: [ProductsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
