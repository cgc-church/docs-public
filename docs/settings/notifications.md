---
title: Notifications
description: How to manage your notification preferences in the CGC app
---

# Notifications

## What You Can Do
- Turn notifications on or off for different categories
- Choose which types of updates you want to receive
- Set quiet hours so you are not disturbed during certain times
- Control how and when the app sends you alerts

## How It Works

**Scenario: Enabling notifications for new sermons**
- **Given** I am on the Notification Settings screen
- **When** I toggle on **New Sermons**
- **Then** I will receive a push notification whenever a new sermon is published

**Scenario: Disabling a notification category**
- **Given** I have event notifications enabled
- **When** I toggle off **Events**
- **Then** I will no longer receive push notifications about upcoming events

**Scenario: Setting quiet hours**
- **Given** I am on the Notification Settings screen
- **When** I enable **Quiet Hours** and set the time from 10:00 PM to 7:00 AM
- **Then** I will not receive any push notifications during those hours

**Scenario: Receiving a notification**
- **Given** I have notifications enabled for new content
- **When** a new sermon or devotional is published
- **Then** I receive a notification on my device with a preview of the new content

## Notification Categories

You can individually control notifications for each of these categories:

- **New Sermons** -- Get notified when new sermons are added
- **New Content** -- Alerts for new devotionals, books, music, or videos
- **Events** -- Reminders about upcoming church events
- **Announcements** -- Important messages from church leadership
- **Account Updates** -- Notifications about your account, subscription, or security

## Step-by-Step Guide

### Managing Notification Preferences
1. Open the app and go to **Settings** (the gear icon).
<!-- TODO: Screenshot -->
2. Tap **Notifications**.
<!-- TODO: Screenshot -->
3. You will see a list of notification categories, each with a toggle switch.
<!-- TODO: Screenshot -->
4. Tap the toggle next to any category to turn it on or off.
   - **Green/On** means you will receive those notifications.
   - **Gray/Off** means those notifications are silenced.
<!-- TODO: Screenshot -->

### Setting Up Quiet Hours
1. In the Notifications settings, scroll down to **Quiet Hours**.
<!-- TODO: Screenshot -->
2. Toggle on **Quiet Hours**.
3. Set your preferred **Start Time** (for example, 10:00 PM).
4. Set your preferred **End Time** (for example, 7:00 AM).
<!-- TODO: Screenshot -->
5. During quiet hours, no push notifications will be sent to your device.

### Turning Off All Notifications
1. Go to **Settings > Notifications**.
2. Toggle off every category, or look for a **Disable All** option at the top of the screen.
3. You can also disable notifications through your device settings:
   - **iPhone:** Go to device Settings > Notifications > CGC > toggle off Allow Notifications.
   - **Android:** Go to device Settings > Apps > CGC > Notifications > toggle off.

## Common Issues

| Problem | Solution |
|---------|----------|
| I am not receiving any notifications | Make sure notifications are enabled both in the app (Settings > Notifications) and on your device (device Settings > Notifications > CGC). |
| I keep getting notifications I turned off | Close and reopen the app after changing notification settings. If the issue persists, try logging out and back in. |
| Quiet hours are not working | Double-check that the start and end times are set correctly. Make sure Quiet Hours is toggled on. |
| I got a notification during quiet hours | If you recently changed your quiet hours, close and reopen the app for the change to take effect. |
| Notifications are delayed | Push notification delivery depends on your internet connection and device settings. Make sure background app refresh is enabled for the CGC app. |

## Need Help?
Contact us at support@christgospel.org
