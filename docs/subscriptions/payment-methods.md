---
title: Payment Methods
description: Add, update, and manage your payment methods, and view payment history
---

# Payment Methods

## What You Can Do
- Add a credit or debit card as a payment method
- Update your existing card information
- Remove a payment method you no longer use
- View your payment history and past charges
- Download receipts for your records

## How It Works

**Scenario: Adding a new payment method**
- **Given** I am on the Payment Methods screen
- **When** I tap "Add Payment Method" and enter my card details
- **Then** my card is saved securely and can be used for future payments

**Scenario: Updating an existing card**
- **Given** I have a card on file that needs updating (new expiration date or card number)
- **When** I tap the card and select "Edit"
- **Then** I can update the card details and save the changes

**Scenario: Viewing payment history**
- **Given** I am on the Payment Methods screen
- **When** I tap "Payment History"
- **Then** I see a list of all past charges with dates, amounts, and descriptions

**Scenario: Downloading a receipt**
- **Given** I am viewing my payment history
- **When** I tap on a specific transaction
- **Then** I can view the receipt details and download or email a copy to myself

**Scenario: Removing a payment method**
- **Given** I want to remove a card from my account
- **When** I tap the card and select "Remove"
- **Then** the card is deleted from my account after I confirm

## Step-by-Step Guide

### Adding a Payment Method
1. Open the app and go to **Settings**
2. Tap **Subscription** or **Account**
3. Tap **Payment Methods**
4. Tap **Add Payment Method**
5. Enter your card number, expiration date, and security code
6. Tap **Save**
7. Your card is now on file for future payments
<!-- TODO: Screenshot -->

### Updating Card Information
1. Go to **Settings** and tap **Payment Methods**
2. Tap the card you want to update
3. Tap **Edit**
4. Update the card number, expiration date, or billing address as needed
5. Tap **Save** to apply the changes
<!-- TODO: Screenshot -->

### Removing a Payment Method
1. Go to **Settings** and tap **Payment Methods**
2. Tap the card you want to remove
3. Tap **Remove Payment Method**
4. Confirm by tapping **Remove**
5. The card is deleted from your account
<!-- TODO: Screenshot -->

### Viewing Payment History
1. Go to **Settings** and tap **Payment Methods** or **Billing**
2. Tap **Payment History**
3. Browse the list of past transactions
4. Each entry shows the date, amount, and description of the charge
<!-- TODO: Screenshot -->

### Downloading a Receipt
1. Go to **Payment History** (see steps above)
2. Tap on the transaction you need a receipt for
3. The receipt details open, showing the date, amount, plan, and payment method used
4. Tap **Download Receipt** to save it, or tap **Email Receipt** to send it to your email address
<!-- TODO: Screenshot -->

## Common Issues

| Problem | Solution |
|---------|----------|
| My card was declined | Verify that your card number, expiration date, and security code are correct. Check with your bank to ensure the card is active and not blocked. |
| I can't add a payment method | Make sure you're entering valid card details. The app accepts major credit and debit cards. If the issue persists, try a different card. |
| I don't see my payment history | Payment history is only available for direct purchases through the app. If you subscribed through the App Store or Google Play, check your purchase history there. |
| I was charged an unexpected amount | Check your payment history for details on the charge. If you recently upgraded, you may see a prorated charge. Contact support for any billing questions. |
| I removed my card but still have a subscription | Removing a payment method does not cancel your subscription. To cancel, go to Manage Subscription. |
| I need a receipt for a past payment | Go to Payment History, tap the transaction, and select Download Receipt or Email Receipt. |

## Need Help?
Contact us at support@christgospel.org
