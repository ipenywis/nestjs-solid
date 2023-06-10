// app.module.ts
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EmailController } from './email.controller';
import { SMSController } from './sms.controller';
import { PushNotificationController } from './push-notification.controller';

@Module({
  providers: [NotificationService],
  controllers: [EmailController, SMSController, PushNotificationController],
})
export class AppModule {}
