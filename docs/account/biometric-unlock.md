---
title: Biometric Unlock
description: How to set up Face ID or Touch ID to unlock the CGC app
---

# Biometric Unlock

Biometric unlock lets you sign in to the CGC app using Face ID or Touch ID instead of typing your password every time. It's a fast and secure way to access your account.

## What You Can Do

- Enable Face ID or Touch ID to unlock the CGC app
- Skip entering your password each time you open the app
- Disable biometric unlock at any time if you prefer to use your password
- Use biometric unlock on supported iPhones, iPads, and Android devices

## Supported Devices

- **Face ID:** iPhone X and later, iPad Pro (2018 and later)
- **Touch ID:** iPhone 5s through iPhone SE, iPads with a Home button or Touch ID power button
- **Android fingerprint:** Most Android devices running Android 10 or later with a fingerprint sensor
- **Android face unlock:** Select Android devices with face recognition hardware

Your device must already have biometric security set up in your device settings before you can use it in the CGC app.

## How It Works

**Scenario: Enabling biometric unlock**
- **Given** I am logged in and on the Settings screen
- **When** I find "Biometric Unlock" and turn it on
- **Then** I am prompted to confirm with Face ID or Touch ID, and the feature is enabled

**Scenario: Unlocking the app with Face ID**
- **Given** I have biometric unlock enabled and the app is asking me to sign in
- **When** I look at my phone to use Face ID
- **Then** the app recognizes me and signs me in automatically

**Scenario: Unlocking the app with Touch ID**
- **Given** I have biometric unlock enabled and the app is asking me to sign in
- **When** I place my finger on the Home button or fingerprint sensor
- **Then** the app recognizes my fingerprint and signs me in automatically

**Scenario: Disabling biometric unlock**
- **Given** I am on the Settings screen
- **When** I find "Biometric Unlock" and turn it off
- **Then** the app no longer uses Face ID or Touch ID, and I need to enter my password to sign in

## Step-by-Step Guide

### Enable Biometric Unlock

1. Open the CGC app and make sure you are logged in.
<!-- TODO: Screenshot -->
2. Tap the **menu** icon or navigate to **Settings**.
<!-- TODO: Screenshot -->
3. Find the **"Biometric Unlock"** option (it may also appear as "Face ID" or "Touch ID" depending on your device).
<!-- TODO: Screenshot -->
4. Toggle the switch to **On**.
<!-- TODO: Screenshot -->
5. When prompted, **confirm with Face ID, Touch ID, or your fingerprint** to verify it's you.
<!-- TODO: Screenshot -->
6. Biometric unlock is now active. The next time you open the app, you can sign in with your face or fingerprint.

### Disable Biometric Unlock

1. Open the CGC app and go to **Settings**.
<!-- TODO: Screenshot -->
2. Find the **"Biometric Unlock"** option.
<!-- TODO: Screenshot -->
3. Toggle the switch to **Off**.
<!-- TODO: Screenshot -->
4. You will now need to enter your email and password to sign in.

### When Biometric Unlock Is Prompted

Biometric unlock is prompted in these situations:

- When you open the app after it has been closed or running in the background
- When you return to the app after a period of inactivity
- When you try to access sensitive account settings

## Common Issues

| Problem | Solution |
|---------|----------|
| I don't see the "Biometric Unlock" option in Settings | Make sure Face ID or Touch ID (or fingerprint) is already set up on your device. Go to your device settings and enable it there first. |
| Face ID / Touch ID keeps failing in the app | Make sure biometrics are working properly on your device by testing them in your device settings. Clean your fingerprint sensor if using Touch ID. |
| I was asked for my password even though biometric unlock is enabled | After a device restart, a software update, or several failed biometric attempts, the app may ask for your password for security reasons. |
| I got a new phone and biometric unlock isn't working | You'll need to log in with your email and password on the new device first, then enable biometric unlock again in Settings. |
| I want to switch from Touch ID to Face ID | Biometric unlock automatically uses whatever biometric method is set up on your device. If your new device uses Face ID instead of Touch ID, the app will switch automatically. |

## Need Help?

Contact us at support@christgospel.org
