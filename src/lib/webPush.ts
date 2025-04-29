import { AxiosClient } from "@/components";
import webPush from "web-push";

const vapidKeys = webPush.generateVAPIDKeys();

webPush.setVapidDetails(
  "mailto:your@domain.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export const saveSubscription = async (subscription: PushSubscriptionJSON) => {
  const response = await AxiosClient.post("/subscribe", subscription);
  const data = response.data?.data;
  if (data) {
    return data;
  }
  return null;
};

export const sendNotification = (
  subscriptions: PushSubscriptionJSON[],
  payload: string
) => {
  subscriptions.forEach((subscription) => {
    webPush
      .sendNotification(subscription as webPush.PushSubscription, payload)
      .catch((error) => console.error("Error sending notification:", error));
  });
};

export { vapidKeys };
