---
title: Manage Subscription
description: View, upgrade, downgrade, or cancel your subscription plan
---

# Manage Subscription

## What You Can Do
- View your current subscription plan and its details
- Upgrade to a higher plan for more features
- Downgrade to a lower plan if you want to reduce costs
- Cancel your subscription at any time
- Check your next renewal date
- Restore purchases if your subscription isn't recognized

## How It Works

**Scenario: Viewing my current plan**
- **Given** I am on the Subscription settings screen
- **When** I look at the top of the page
- **Then** I see my current plan name, renewal date, and a summary of included features

**Scenario: Upgrading my plan**
- **Given** I am on the Manage Subscription screen
- **When** I tap "Upgrade" and select a higher plan
- **Then** the price difference is prorated and my new features are available immediately

**Scenario: Downgrading my plan**
- **Given** I am on the Manage Subscription screen
- **When** I tap "Change Plan" and select a lower plan
- **Then** I keep my current plan benefits until the end of the billing period, then switch to the lower plan

**Scenario: Canceling my subscription**
- **Given** I am on the Manage Subscription screen
- **When** I tap "Cancel Subscription" and confirm
- **Then** my subscription is set to expire at the end of the current billing period, and I keep access until then

**Scenario: Restoring a purchase**
- **Given** I subscribed but my features are not showing as active
- **When** I tap "Restore Purchases" on the Subscription screen
- **Then** the app checks my account and re-activates my subscription

## Step-by-Step Guide

### Viewing Your Current Plan
1. Open the app and go to **Settings**
2. Tap **Subscription** or **Manage Subscription**
3. Your current plan is displayed at the top
4. Below it, you can see your **renewal date** and a list of included features
<!-- TODO: Screenshot -->

### Upgrading Your Plan
1. Go to **Settings** and tap **Subscription**
2. Tap **Upgrade** or **Change Plan**
3. Select the plan you want to upgrade to
4. Review the pricing details (any price difference is prorated for the current period)
5. Confirm the upgrade and tap **Subscribe**
6. Your new features are available immediately
<!-- TODO: Screenshot -->

### Downgrading Your Plan
1. Go to **Settings** and tap **Subscription**
2. Tap **Change Plan**
3. Select the lower plan you want to switch to
4. Review the details -- you will keep your current plan's benefits until your renewal date
5. Confirm the downgrade
6. At the end of your current billing period, your plan switches to the lower tier
<!-- TODO: Screenshot -->

### Canceling Your Subscription
1. Go to **Settings** and tap **Subscription**
2. Tap **Cancel Subscription**
3. You may be asked why you're canceling (this is optional feedback)
4. Confirm the cancellation
5. Your subscription remains active until the end of your current billing period
6. After it expires, your account reverts to the free plan
<!-- TODO: Screenshot -->

### Restoring Purchases
1. Go to **Settings** and tap **Subscription**
2. Tap **Restore Purchases**
3. The app checks with the app store to verify your subscription
4. If a valid subscription is found, your features are re-activated
5. If no subscription is found, you may need to re-subscribe
<!-- TODO: Screenshot -->

## Common Issues

| Problem | Solution |
|---------|----------|
| I upgraded but still see the old plan | Close and reopen the app. If the issue persists, tap "Restore Purchases" on the Subscription screen. |
| I canceled but was still charged | Cancellations take effect at the end of the billing period. If you were charged after canceling, check the cancellation date. Contact support if the charge was unexpected. |
| I can't find the cancel option | If you subscribed through the Apple App Store or Google Play Store, you may need to manage your subscription through your device's subscription settings. |
| My subscription expired but I still want access | Go to the Subscription screen and choose a plan to re-subscribe. Your data (favorites, notes, etc.) is still saved. |
| I want a refund | Refund policies depend on where you subscribed. For App Store or Play Store purchases, contact Apple or Google. For direct purchases, contact our support team. |
| I subscribed on a different device | Make sure you're logged in with the same account on both devices. Then tap "Restore Purchases" to sync your subscription. |

## Need Help?
Contact us at support@christgospel.org
