// notification.service.ts
import { Injectable } from '@nestjs/common';
import {
  EmailNotification,
  SMSNotification,
  PushNotification,
} from './notification.interfaces';

@Injectable()
export class NotificationService {
  sendEmail(notification: EmailNotification): void {
    // Logic to send email notification
  }

  sendSMS(notification: SMSNotification): void {
    // Logic to send SMS notification
  }

  sendPushNotification(notification: PushNotification): void {
    // Logic to send push notification
  }
}
