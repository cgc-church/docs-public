---
title: Playback Issues
description: Solutions for audio and video playback problems in the CGC app
---

# Playback Issues

## What You Can Do
- Fix audio or video that will not play
- Resolve buffering and loading problems
- Restore sound when there is no audio
- Unstick a frozen or stuck player
- Troubleshoot background playback issues

## How It Works

**Scenario: Audio will not play**
- **Given** I tap play on a sermon or music track
- **When** the player shows it is playing but I hear nothing
- **Then** I check my device volume and silent mode, close other audio apps, and try again

**Scenario: Video keeps buffering**
- **Given** I am watching a video and it keeps pausing to buffer
- **When** I check my internet connection
- **Then** I switch to a stronger Wi-Fi network or wait for a better connection

**Scenario: The player is stuck or frozen**
- **Given** the playback controls are not responding
- **When** I close and reopen the app
- **Then** the player resets and I can start playback again

**Scenario: Background playback stops when I leave the app**
- **Given** I am listening to a sermon and switch to another app
- **When** the audio stops playing
- **Then** I check that background audio is enabled in the app settings and in my device settings

**Scenario: Downloaded content will not play**
- **Given** I downloaded a sermon for offline listening
- **When** I try to play it and it will not start
- **Then** I delete the download and re-download the content

## Step-by-Step Guide

### Audio or Video Will Not Play
1. Check your internet connection. If you are not connected to Wi-Fi or mobile data, only downloaded content will play.
<!-- TODO: Screenshot -->
2. Make sure the content has finished loading. Look for a loading indicator.
3. Try tapping the play button again.
4. Close the app completely and reopen it.
5. If the issue persists, try a different sermon or video to determine if the problem is with a specific file.

### Fixing Buffering Problems
1. Check your internet speed. Buffering usually means your connection is slow.
<!-- TODO: Screenshot -->
2. If you are on mobile data, try switching to Wi-Fi.
3. If you are on Wi-Fi, move closer to your router or try a different network.
4. Close other apps that may be using your internet bandwidth (streaming services, downloads, etc.).
5. If buffering continues, try downloading the content first and playing it offline.

### Restoring Sound
1. Check that your device is not on silent or vibrate mode.
   - **iPhone:** Check the switch on the side of your phone. If you see orange, silent mode is on.
   - **Android:** Press the volume up button to make sure volume is not at zero.
<!-- TODO: Screenshot -->
2. Make sure the in-app volume is turned up. Look for a volume slider in the player.
3. If you are using Bluetooth headphones or a speaker, make sure they are connected and the volume is up.
4. Close other apps that may be using audio (music apps, podcasts, etc.).
5. Restart the app.

### Fixing a Stuck or Frozen Player
1. Tap the pause button, wait a few seconds, and tap play again.
2. Try scrubbing the progress bar to a different position.
3. If the controls are completely unresponsive, close the app and reopen it.
4. If the problem continues, restart your device.

### Fixing Background Playback
1. In the CGC app, go to **Settings** and make sure background audio or background playback is enabled.
<!-- TODO: Screenshot -->
2. On your device:
   - **iPhone:** Go to device Settings > CGC > make sure Background App Refresh is enabled.
   - **Android:** Go to device Settings > Apps > CGC > Battery > set to "Unrestricted" or "No restrictions."
3. Make sure no battery saver or power saving mode is active, as these can stop background audio.
4. Restart the app and try playing content again.

## Common Issues

| Problem | Solution |
|---------|----------|
| Sermon plays but there is no audio | Check your device volume and silent mode switch. Try plugging in headphones to test. Restart the app. |
| Video is black but audio plays | Close and reopen the app. Make sure your device software is up to date. Try a different video. |
| Content stops playing after a few seconds | Check your internet connection. If playing downloaded content, delete it and re-download. |
| Player controls are missing | Rotate your device or scroll down to find the player controls. Close and reopen the app if they are still missing. |
| Playback is choppy or skipping | Close other apps to free up device resources. Check your internet connection. Try downloading the content and playing it offline. |
| Cannot play content in the background | Enable background playback in the app settings and make sure your device allows background audio for the CGC app. |

## Need Help?
Contact us at support@christgospel.org
