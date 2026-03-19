---
title: Login Issues
description: Solutions for problems logging into the CGC app
---

# Login Issues

## What You Can Do
- Reset your password if you forgot it
- Resolve "Invalid credentials" errors
- Fix account lockout issues
- Troubleshoot social login problems (Google, Apple)
- Handle session expired messages

## How It Works

**Scenario: Resetting a forgotten password**
- **Given** I am on the login screen
- **When** I tap **Forgot Password** and enter my email address
- **Then** I receive a password reset email with a link to create a new password

**Scenario: Fixing an "Invalid credentials" error**
- **Given** I am trying to log in with my email and password
- **When** I see the error "Invalid credentials"
- **Then** I double-check my email and password for typos, and if needed, reset my password

**Scenario: Unlocking a locked account**
- **Given** my account has been locked due to too many failed login attempts
- **When** I wait 30 minutes or use the **Forgot Password** link to reset my password
- **Then** my account is unlocked and I can log in again

**Scenario: Logging in with Google or Apple**
- **Given** I am on the login screen
- **When** I tap **Sign in with Google** or **Sign in with Apple**
- **Then** I am redirected to the Google or Apple sign-in flow and then returned to the app

**Scenario: Handling a session expired message**
- **Given** I am using the app and see a "Session expired" message
- **When** I tap **Log In** and enter my credentials
- **Then** I am logged back in and can continue using the app

## Step-by-Step Guide

### Resetting Your Password
1. On the login screen, tap **Forgot Password**.
<!-- TODO: Screenshot -->
2. Enter the email address associated with your account.
<!-- TODO: Screenshot -->
3. Tap **Send Reset Link**.
4. Check your email inbox for a message from CGC (check your spam or junk folder if you do not see it).
5. Open the email and tap the **Reset Password** link.
6. Enter your new password and confirm it.
7. Go back to the app and log in with your new password.

### Fixing "Invalid Credentials"
1. Make sure you are using the correct email address. Check for typos.
2. Make sure you are entering the right password. Passwords are case-sensitive.
3. If you have multiple email addresses, try logging in with each one.
4. If you still cannot log in, reset your password using the steps above.

### Unlocking a Locked Account
1. If your account is locked, wait 30 minutes before trying again.
2. Alternatively, tap **Forgot Password** to reset your password. This will also unlock your account.
3. After resetting, log in with your new password.

### Fixing Social Login Issues (Google or Apple)
1. Make sure the Google or Apple account you are using is the same one you originally signed up with.
2. Check that you have a working internet connection.
3. If using Apple Sign In, make sure you did not choose "Hide My Email" with a different Apple ID than the one linked to your CGC account.
4. Try logging in with your email and password instead. If you never set a password, use **Forgot Password** to create one.
5. If the issue persists, contact support.

### Handling "Session Expired"
1. This message appears when your login session has timed out for security reasons.
2. Simply tap **Log In** and enter your email and password.
3. If you see this message frequently, make sure your app is up to date.

## Common Issues

| Problem | Solution |
|---------|----------|
| I never received the password reset email | Check your spam/junk folder. Make sure you entered the correct email address. Wait a few minutes and try again. |
| The reset link says it has expired | Password reset links expire after a set time. Request a new one by tapping **Forgot Password** again. |
| I cannot remember which email I used | Try each email address you might have used. If none work, contact support for help locating your account. |
| The app says my account does not exist | You may not have created an account yet. Try tapping **Create Account** to register. If you are sure you had an account, contact support. |
| I keep getting logged out | Make sure your app is up to date. Check that your device date and time settings are correct (set to automatic). Clear the app cache and try again. |
| Social login button does not respond | Check your internet connection. Restart the app. Make sure you are running the latest version of the app. |

## Need Help?
Contact us at support@christgospel.org
