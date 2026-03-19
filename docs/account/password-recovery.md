---
title: Password Recovery
description: How to reset your password if you've forgotten it
---

# Password Recovery

Forgot your password? No worries. You can reset it in just a few steps using the email address tied to your account.

## What You Can Do

- Request a password reset link sent to your email
- Create a new password for your account
- Get back into your account quickly and securely

## How It Works

**Scenario: Requesting a password reset**
- **Given** I am on the login screen
- **When** I tap "Forgot Password?" and enter my email address
- **Then** I receive an email with a link to reset my password

**Scenario: Resetting my password from the email link**
- **Given** I have received the password reset email
- **When** I tap the reset link and enter a new password
- **Then** my password is updated and I can log in with the new password

**Scenario: The reset link has expired**
- **Given** I received a password reset email more than 24 hours ago
- **When** I tap the reset link
- **Then** I see a message that the link has expired and I need to request a new one

## Step-by-Step Guide

1. Open the CGC app and tap **"Log In"**.
<!-- TODO: Screenshot -->
2. Tap **"Forgot Password?"** below the password field.
<!-- TODO: Screenshot -->
3. Enter the **email address** associated with your account.
<!-- TODO: Screenshot -->
4. Tap **"Send Reset Link"**.
<!-- TODO: Screenshot -->
5. Open your **email inbox** and look for a message from CGC with the subject "Reset Your Password."
<!-- TODO: Screenshot -->
6. Tap the **reset link** in the email.
7. Enter your **new password**. Your password must be at least 8 characters long and include a mix of letters and numbers.
<!-- TODO: Screenshot -->
8. Confirm your new password by typing it again.
9. Tap **"Reset Password"** to save your new password.
<!-- TODO: Screenshot -->
10. Go back to the app and **log in** with your new password.

## Tips for a Strong Password

- Use at least 8 characters
- Include a mix of uppercase and lowercase letters
- Add at least one number
- Avoid using your name, birthday, or common words like "password"
- Don't reuse passwords from other accounts

## Common Issues

| Problem | Solution |
|---------|----------|
| I didn't receive the reset email | Check your spam or junk folder. Make sure you entered the correct email address. If you still don't see it, wait a few minutes and try again. |
| The reset link says it's expired | Reset links expire after 24 hours. Go back to the app and request a new one by tapping "Forgot Password?" again. |
| My new password won't save | Make sure your password meets the requirements: at least 8 characters with a mix of letters and numbers. Both password fields must match exactly. |
| I don't remember which email I used | Try the email addresses you commonly use. If you're still unable to find your account, contact support for assistance. |
| I reset my password but still can't log in | Make sure you're using the new password, not the old one. If you're still having trouble, try resetting your password one more time. |

## Need Help?

Contact us at support@christgospel.org
