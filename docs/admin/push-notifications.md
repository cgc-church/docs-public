---
title: Push Notifications
description: How to send push notifications to CGC app users from the admin dashboard
---

# Push Notifications

## What You Can Do
- Send push notifications to all app users or specific audiences
- Target notifications by user group, role, or subscription status
- Schedule notifications for a future date and time
- Track delivery status to see how many users received your notification
- Write custom notification titles and messages

## How It Works

**Scenario: Sending an immediate notification to all users**
- **Given** I am on the Push Notifications screen in the admin dashboard
- **When** I write a notification title and message, select **All Users** as the audience, and click **Send Now**
- **Then** the notification is delivered to all app users who have notifications enabled

**Scenario: Targeting a notification to a specific group**
- **Given** I am creating a new push notification
- **When** I select a specific audience such as **Subscribers** or a user group
- **Then** only users in that group will receive the notification

**Scenario: Scheduling a notification for later**
- **Given** I am composing a push notification
- **When** I set a future date and time and click **Schedule**
- **Then** the notification is queued and will be sent automatically at the scheduled time

**Scenario: Checking delivery status**
- **Given** I have sent a push notification
- **When** I go to the notification history and click on a sent notification
- **Then** I can see how many users received the notification and the delivery timestamp

## Step-by-Step Guide

### Sending a Push Notification
1. Log into the admin dashboard.
<!-- TODO: Screenshot -->
2. In the left navigation, click **Notifications** or **Push Notifications**.
<!-- TODO: Screenshot -->
3. Click **Create New Notification**.
<!-- TODO: Screenshot -->
4. Fill in the notification details:
   - **Title** -- A short, attention-getting headline (keep it under 50 characters).
   - **Message** -- The body of the notification (keep it under 150 characters for best display).
<!-- TODO: Screenshot -->
5. Choose your audience:
   - **All Users** -- Everyone who has the app installed and notifications enabled.
   - **Subscribers** -- Only users with an active subscription.
   - **Specific Group** -- Target a particular ministry or user group.
<!-- TODO: Screenshot -->
6. Choose when to send:
   - **Send Now** -- Delivers the notification immediately.
   - **Schedule** -- Pick a future date and time.
7. Click **Send** or **Schedule** to confirm.

### Scheduling a Notification
1. While creating a notification, select **Schedule** instead of **Send Now**.
<!-- TODO: Screenshot -->
2. Use the date and time picker to choose when the notification should be sent.
3. Click **Schedule**.
4. The notification will appear in your notification list with a "Scheduled" status.
5. You can edit or cancel a scheduled notification before it is sent.

### Viewing Notification History
1. Go to **Notifications** in the admin dashboard.
2. You will see a list of all past and scheduled notifications.
<!-- TODO: Screenshot -->
3. Each entry shows the title, audience, send date, and delivery status.
4. Click on any notification to see detailed delivery information.

## Best Practices

- **Keep it short.** Notification titles should be under 50 characters and messages under 150 characters.
- **Be relevant.** Only send notifications that provide value to the recipient.
- **Time it well.** Avoid sending notifications very early in the morning or late at night. Consider your audience's time zone.
- **Do not over-send.** Sending too many notifications can cause users to turn off notifications or uninstall the app.
- **Use targeting.** Send notifications to the right audience rather than everyone when possible.

## Common Issues

| Problem | Solution |
|---------|----------|
| Notification was not delivered | Check that the audience you selected has notifications enabled. Users who have turned off notifications in the app or on their device will not receive them. |
| Scheduled notification did not send | Verify the date, time, and time zone. Check the notification status in the history -- it may show an error. |
| Notification text is cut off | Keep titles under 50 characters and message body under 150 characters. Longer text may be truncated on some devices. |
| I sent a notification by mistake | Unfortunately, push notifications cannot be recalled once sent. Double-check your notification content and audience before clicking Send. |
| Only some users received the notification | Users who have disabled notifications on their device or in the app will not receive push notifications. This is normal behavior. |

## Need Help?
Contact us at support@christgospel.org
