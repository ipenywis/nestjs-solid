// push-notification.controller.ts
import { Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { PushNotification } from './notification.interfaces';

@Controller('push-notification')
export class PushNotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  sendPushNotification(notification: PushNotification): void {
    this.notificationService.sendPushNotification(notification);
  }
}
