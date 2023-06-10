//Bad ❌
//Not seperating the concerns
export interface Notification {
  to?: string; //< for email
  subject?: string; //< for email
  body?: string; //< for email & push
  phoneNumber?: string; //< for sms
  message?: string; //< for sms
  userId?: string; //< for push
  title?: string; //< for push
}

//Good ✅
export interface EmailNotification {
  to: string;
  subject: string;
  body: string;
}

export interface SMSNotification {
  phoneNumber: string;
  message: string;
}

export interface PushNotification {
  userId: string;
  title: string;
  body: string;
}
