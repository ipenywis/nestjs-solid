//Bad ❌
//Not seperating the concerns
export interface Notification {
  to: string;
  subject: string;
  body: string;
  phoneNumber: string;
  message: string;
  userId: string;
  title: string;
  // body: string;
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
