---
title: Log In
description: How to sign in to your CGC account
---

# Log In

Once you have a CGC account, logging in gives you access to all your saved content, your profile, and personalized features.

## What You Can Do

- Log in with your email address and password
- Log in with your Google account
- Log in with your Apple ID
- Stay signed in using the "Remember Me" option
- Recover your account if you can't log in

## How It Works

**Scenario: Logging in with email and password**
- **Given** I am on the login screen
- **When** I enter my email and password and tap "Log In"
- **Then** I am signed in and taken to the home screen

**Scenario: Logging in with Google**
- **Given** I am on the login screen
- **When** I tap "Continue with Google" and select my Google account
- **Then** I am signed in using my Google account

**Scenario: Logging in with Apple**
- **Given** I am on the login screen
- **When** I tap "Continue with Apple" and confirm with Face ID or my Apple ID password
- **Then** I am signed in using my Apple ID

**Scenario: Using Remember Me to stay signed in**
- **Given** I am on the login screen
- **When** I check the "Remember Me" box before logging in
- **Then** I stay signed in the next time I open the app

**Scenario: Entering incorrect credentials**
- **Given** I am on the login screen
- **When** I enter the wrong email or password
- **Then** I see an error message telling me the credentials are incorrect, with an option to try again or reset my password

## Step-by-Step Guide

### Log In with Email and Password

1. Open the CGC app on your device.
<!-- TODO: Screenshot -->
2. Tap **"Log In"** on the welcome screen.
<!-- TODO: Screenshot -->
3. Enter the **email address** you used when creating your account.
<!-- TODO: Screenshot -->
4. Enter your **password**.
5. Optionally, check the **"Remember Me"** box to stay signed in.
6. Tap **"Log In"**.
<!-- TODO: Screenshot -->

### Log In with Google

1. On the login screen, tap **"Continue with Google"**.
<!-- TODO: Screenshot -->
2. Select the **Google account** you want to use.
3. If prompted, confirm by entering your Google password.
4. You are now signed in.
<!-- TODO: Screenshot -->

### Log In with Apple

1. On the login screen, tap **"Continue with Apple"**.
<!-- TODO: Screenshot -->
2. Confirm with **Face ID**, **Touch ID**, or your **Apple ID password**.
3. Choose whether to share or hide your email address (first time only).
4. You are now signed in.
<!-- TODO: Screenshot -->

## Common Issues

| Problem | Solution |
|---------|----------|
| I forgot my password | Tap "Forgot Password?" on the login screen to reset it. See [Password Recovery](password-recovery.md) for detailed steps. |
| I see "Invalid email or password" | Double-check your email for typos. Make sure Caps Lock is off. If you're still stuck, reset your password. |
| I signed up with Google but I'm trying to log in with email | If you originally created your account with Google, use the "Continue with Google" button. You won't have a separate password. |
| The "Continue with Apple" option doesn't appear | Sign in with Apple requires iOS 13 or later. Make sure your device is updated. This option is not available on Android. |
| I keep getting logged out every time I close the app | Make sure "Remember Me" is checked when you log in. Also check that your app is up to date. |
| My account seems locked | After several failed login attempts, your account may be temporarily locked for security. Wait a few minutes and try again, or reset your password. |

## Need Help?

Contact us at support@christgospel.org
