// notification.service.ts
import { Injectable } from '@nestjs/common';
import {
  EmailNotification,
  SMSNotification,
  PushNotification,
  Notification,
} from './notification.interfaces';

//AMAZON Simple Email Service Instance
const ses: any = {};

@Injectable()
export class NotificationService {
  async badSendEmail(notification: Notification) {
    // Define the parameters for the email
    const params = {
      Source: 'no-reply@coderone.io',
      Destination: {
        ToAddresses: [notification.to],
      },
      Message: {
        Subject: {
          Data: notification.subject,
        },
        Body: {
          Text: {
            Data: notification.body,
          },
        },
      },
    };

    await ses.sendEmail(params);
  }

  badSendSMS(notification: Notification) {
    // Logic to send SMS notification
  }

  badSendPushNotification(notification: Notification) {
    // Logic to send push notification
  }

  sendEmail(notification: EmailNotification) {
    // Logic to send email notification
  }

  sendSMS(notification: SMSNotification): void {
    // Logic to send SMS notification
  }

  sendPushNotification(notification: PushNotification): void {
    // Logic to send push notification
  }
}
