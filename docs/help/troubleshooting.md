# Troubleshooting

Having trouble? This guide covers solutions to common issues across the CGC mobile app, web dashboard, and subscription services. Find your issue below and follow the steps to resolve it.

## Mobile App Issues

### App won't load or crashes on startup

1. **Force close** the app and reopen it
2. **Check your internet** connection
3. **Update** to the latest version from the App Store or Google Play
4. **Restart** your device
5. If the issue persists, **uninstall and reinstall** the app

::: warning
Reinstalling the app will remove any downloaded content. You can re-download your sermons after signing back in.
:::

### App shows a blank or white screen

If the app opens but displays a blank or white screen:

1. Wait a moment — the app may still be loading content
2. Force close the app completely and reopen it
3. Check your internet connection
4. Clear the app cache (see [How to Clear App Cache](#how-to-clear-app-cache-mobile) below)
5. Update to the latest version of the app
6. If the issue continues, uninstall and reinstall the app

### App is running slowly or freezing

1. Close other apps running in the background to free up memory
2. Make sure your device has at least **500 MB** of free storage space
3. Clear the app cache (see instructions below)
4. Update to the latest version of the app
5. Restart your device

### Content not displaying

- Check your internet connection
- Pull down to refresh the screen
- Log out and log back in
- Clear the app cache

### Push notifications not working

- Go to your device **Settings > Notifications** and ensure the CGC app has permission to send notifications
- Make sure you're logged in to the app
- **iOS**: Go to **Settings > Notifications > CGC** and make sure **Allow Notifications** is turned on. Check that Banners, Sounds, and Badges are enabled as desired
- **Android**: Go to **Settings > Apps > CGC > Notifications** and make sure notifications are enabled for all relevant channels
- Check that **Do Not Disturb** mode is not active on your device
- Make sure the app has **background app refresh** enabled (iOS: Settings > General > Background App Refresh; Android: Settings > Apps > CGC > Battery > Allow background activity)
- Try logging out and logging back in to refresh your notification registration

### Audio or video won't play

If a sermon or media file won't play or the audio/video is not loading:

1. Check your internet connection — streaming requires an active connection
2. Try pausing and resuming playback
3. Close and reopen the app, then try again
4. Make sure your device volume is turned up and not on silent/mute
5. Check that no other apps are currently using the audio (e.g., music or podcast apps)
6. If using Bluetooth headphones or a speaker, disconnect and try playing through your device speaker to rule out a Bluetooth issue
7. Update the app to the latest version
8. If playing a downloaded sermon, try deleting it and re-downloading

### Audio plays but stops unexpectedly or skips

- Make sure **background audio playback** is enabled: go to **Settings > Playback** in the app
- Check that battery optimization is not killing the app in the background (Android: Settings > Apps > CGC > Battery > Unrestricted)
- Ensure you have a stable internet connection if streaming
- Try downloading the sermon for offline playback to avoid streaming interruptions

### Download failures

If a sermon won't download or a download gets stuck:

1. Check your internet connection
2. Make sure you have an **active subscription** — downloads require a premium plan
3. Verify you have enough **storage space** on your device
4. If "Wi-Fi only" is enabled in Settings > Downloads, make sure you are connected to Wi-Fi
5. Cancel the stuck download and try again
6. Force close the app, reopen it, and retry the download
7. If the issue persists, clear the app cache and try again

### Downloads disappeared after app update

- Make sure you are signed in with the same account
- If you recently updated or reinstalled the app, downloads may need to be re-downloaded
- Go to the **Downloads** section to check if your content is still listed
- If your subscription has expired, downloaded content may become unavailable

### App permissions issues

If the app is asking for permissions or a feature isn't working due to permissions:

- **Notifications**: Settings > Notifications > CGC (iOS) or Settings > Apps > CGC > Notifications (Android)
- **Storage/Photos**: Required for saving content. Settings > Privacy > Photos (iOS) or Settings > Apps > CGC > Permissions > Storage (Android)
- **Background App Refresh**: Required for downloads and audio playback in the background. Settings > General > Background App Refresh > CGC (iOS) or Settings > Apps > CGC > Battery (Android)

::: tip
If you previously denied a permission, you will need to enable it manually in your device settings. The app cannot re-prompt you once a permission has been denied.
:::

### How to clear app cache (mobile) {#how-to-clear-app-cache-mobile}

Clearing the cache can resolve many display and performance issues without affecting your account or downloads.

**iOS:**
1. Go to device **Settings > General > iPhone Storage**
2. Find the **CGC** app in the list
3. Tap **Offload App** — this clears the cache while keeping your data
4. Tap **Reinstall App** to restore it

**Android:**
1. Go to device **Settings > Apps > CGC**
2. Tap **Storage & cache**
3. Tap **Clear cache** (not "Clear data" — that would remove your downloads)

---

## Web Dashboard Issues

### Can't log in

- Verify your email address is correct
- Use "Forgot Password" to reset your credentials
- Clear your browser cache and cookies
- Try a different browser
- Make sure your Caps Lock key is not on
- Check if your account may be locked (see [Account locked or suspended](#account-locked-or-suspended) below)

### Page shows a blank screen

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache and cookies
- Disable browser extensions temporarily — ad blockers and privacy extensions can sometimes interfere
- Try opening the page in an **incognito/private** browsing window
- Try a different browser

### Two-factor verification code not received

- Check your spam/junk folder
- Wait up to 60 seconds before requesting a new code
- Ensure your email/phone number is correct in your profile
- If using an authenticator app, make sure your device clock is set to the correct time (even a small time difference can cause codes to fail)
- Try using one of your **backup codes** if you saved them during 2FA setup
- If you have lost access to your verification method entirely, contact **support@christgospel.org** for account recovery

### Two-factor authentication not working with authenticator app

If your authenticator app codes keep being rejected:

1. Open your device **Settings > Date & Time** and make sure it is set to **automatic**
2. If the time is correct, try refreshing the code and entering it immediately (codes expire every 30 seconds)
3. Make sure you are using the correct authenticator entry for CGC — you may have multiple entries
4. As a fallback, use one of your **backup codes**
5. Contact **support@christgospel.org** if none of the above works

### Browser compatibility issues

The CGC web dashboard works best on modern browsers. We recommend:

- **Google Chrome** (version 90 or later)
- **Mozilla Firefox** (version 90 or later)
- **Microsoft Edge** (version 90 or later)
- **Safari** (version 15 or later)

If you are experiencing issues:

- Update your browser to the latest version
- Disable browser extensions that may interfere (ad blockers, privacy tools)
- Make sure JavaScript is enabled in your browser settings
- Try clearing your cache and cookies, then reload the page

::: info
Internet Explorer is not supported. If you are using IE, please switch to a modern browser.
:::

### How to clear browser cache and cookies

**Chrome:**
1. Click the three-dot menu > **Settings > Privacy and security > Clear browsing data**
2. Select **Cached images and files** and **Cookies and other site data**
3. Click **Clear data**

**Firefox:**
1. Click the menu button > **Settings > Privacy & Security**
2. Under Cookies and Site Data, click **Clear Data**
3. Check both boxes and click **Clear**

**Safari:**
1. Click **Safari** in the menu bar > **Settings > Privacy**
2. Click **Manage Website Data** > **Remove All**

**Edge:**
1. Click the three-dot menu > **Settings > Privacy, search, and services**
2. Under Clear browsing data, click **Choose what to clear**
3. Select cached files and cookies, then click **Clear now**

---

## Account Issues

### Account locked or suspended

If your account is locked after too many failed login attempts:

- Wait **15 minutes** and try again — accounts are temporarily locked after multiple incorrect password attempts
- Use the **Forgot Password** link to reset your password
- If your account appears to be suspended or you receive a message about account suspension, contact **support@christgospel.org**

### Cannot verify email address

If you are not receiving the email verification link:

1. Check your **spam/junk** folder
2. Make sure you entered the correct email address during registration
3. Wait a few minutes — emails can sometimes be delayed
4. Try tapping **Resend Verification Email** on the login screen
5. Add **noreply@christgospel.org** to your email contacts to prevent future filtering
6. If using a work or school email, check with your IT department — some email systems block automated messages

---

## Subscription & Payment Issues

### Subscription not syncing across devices

If your subscription shows as active on one device but not another:

1. Make sure you are signed in with the **same account** on all devices
2. Go to **Settings > Subscription** and pull down to refresh
3. Log out and log back in on the affected device
4. Wait a few minutes — subscription status may take a short time to sync
5. If the issue persists, contact **support@christgospel.org** with your account email

### Payment declined

If your payment is being declined during checkout or renewal:

1. Verify that your card number, expiration date, and CVV are entered correctly
2. Make sure your card has not expired
3. Check that you have sufficient funds or available credit
4. Contact your bank or card issuer — some banks block online transactions by default and may need to authorize the payment
5. Try a different payment method (a different card)
6. If you continue to have issues, contact **support@christgospel.org**

### Subscription expired but should still be active

- Check your email for any failed payment notifications from Stripe
- Go to **Settings > Subscription** and verify your plan status
- Update your payment method if your card has expired or been replaced
- If your payment failed, updating your card may automatically retry the charge
- Contact **support@christgospel.org** if your subscription status does not update after correcting the payment method

### Family plan issues

If you are having trouble with a family plan:

- **Invitations not received**: Ask the family member to check their spam/junk folder. Ensure the correct email address was entered when sending the invitation.
- **Cannot join family plan**: The family member must have their own CGC account. If they do not have one, they should create an account first, then accept the family plan invitation.
- **Family member lost access**: The primary account holder should go to **Settings > Subscription > Family Members** and check that the member is still listed. Try removing and re-inviting them.
- **Reached the member limit**: Family plans support up to **4 additional members** plus the primary account holder (5 total). If you need to add someone new, you will first need to remove an existing member.

### Promo code or coupon not working

- Make sure you are entering the code exactly as provided, including any uppercase letters or special characters
- Check the expiration date — promo codes may have a limited validity period
- Some codes are valid only for specific plans (e.g., annual plans only)
- Promo codes can typically only be used once per account
- Contact **support@christgospel.org** if you believe the code should be valid

---

## Network & Connectivity Issues

### App says "No internet connection" but I'm connected

1. Try opening a website in your browser to confirm your internet is working
2. Toggle **Airplane Mode** on and off to refresh your connection
3. Switch between Wi-Fi and mobile data to see if one works better
4. Restart your router if you are on Wi-Fi
5. Force close the app and reopen it
6. Restart your device

### Streaming is buffering or keeps stopping

- Check your internet speed — streaming audio requires at least **1 Mbps** and video requires at least **5 Mbps**
- Move closer to your Wi-Fi router if you are on a wireless connection
- Close other apps or browser tabs that may be using bandwidth
- Try switching between Wi-Fi and mobile data
- Lower the streaming quality in **Settings > Playback > Streaming Quality** if available
- Consider downloading the sermon for offline playback to avoid streaming issues

---

## Device-Specific Issues

### iOS-specific issues

- **App stuck on splash screen**: Force close the app by swiping up from the bottom (or double-pressing the Home button) and swiping the app away. Wait a moment, then reopen.
- **Notifications not appearing**: Go to Settings > Notifications > CGC and ensure **Allow Notifications** is enabled. Check that your notification style is set to Banners or Alerts.
- **Storage full warning**: Go to Settings > General > iPhone Storage and offload unused apps. Consider deleting older downloaded sermons.
- **Background audio stops when screen locks**: Go to Settings > General > Background App Refresh and make sure CGC is enabled.

### Android-specific issues

- **App crashes after update**: Clear the app cache in Settings > Apps > CGC > Storage & cache > Clear cache. If that does not help, uninstall and reinstall.
- **Battery optimization killing the app**: Go to Settings > Apps > CGC > Battery and select **Unrestricted** (or equivalent for your device manufacturer). This prevents Android from stopping the app in the background.
- **Notifications delayed**: Some Android manufacturers (Samsung, Xiaomi, Huawei, OnePlus) have aggressive battery optimization that delays notifications. Search for your device manufacturer's battery settings and add CGC to the exception list.
- **Download storage location**: Downloads are saved to your device's internal storage by default. If you are running low on space, consider clearing old downloads.

---

## Error Codes

If you see an error code in the app or on the web dashboard, find it below for guidance.

| Error Code | Meaning | Solution |
|---|---|---|
| **ERR_NETWORK** | Unable to connect to the server | Check your internet connection and try again |
| **ERR_AUTH_001** | Authentication failed | Verify your email and password. Try resetting your password |
| **ERR_AUTH_002** | Session expired | Log out and log back in |
| **ERR_AUTH_003** | Account locked | Wait 15 minutes or reset your password |
| **ERR_SUB_001** | Subscription required | This feature requires an active subscription. Visit [subscriptions.christgospel.org](https://subscriptions.christgospel.org) |
| **ERR_SUB_002** | Subscription expired | Renew your subscription to restore access |
| **ERR_SUB_003** | Payment failed | Update your payment method in Settings > Subscription |
| **ERR_DL_001** | Download failed | Check your internet connection and storage space, then retry |
| **ERR_DL_002** | Insufficient storage | Free up space on your device and try again |
| **ERR_DL_003** | Download not available | This content may not be available for download. Contact support if you believe this is an error |
| **ERR_MEDIA_001** | Playback error | Try closing and reopening the app. If the issue persists, re-download the content |
| **ERR_MEDIA_002** | Stream unavailable | The content may be temporarily unavailable. Try again later |
| **ERR_SERVER_500** | Server error | This is a temporary issue on our end. Please try again in a few minutes |
| **ERR_SERVER_503** | Service maintenance | The service is undergoing scheduled maintenance. Please try again later |

If you see an error code not listed here, please contact support with the error code and a description of what you were doing when the error appeared.

---

## Still Need Help?

If you have tried the steps above and are still experiencing an issue, we are here to help. Contact us at **support@christgospel.org** with:

- A description of the issue
- The **error code** or **error message**, if any
- Your **device** (e.g., iPhone 14, Samsung Galaxy S23) and **operating system version**
- Your **app version** (found in Settings > About)
- Your **browser** name and version (if using the web dashboard)
- Screenshots or screen recordings if possible

The more details you provide, the faster we can help you resolve the issue.
