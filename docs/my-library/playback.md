---
title: Playback & Player Controls
description: Control audio and video playback including queue, mini player, and background play
---

# Playback & Player Controls

## What You Can Do
- Play and control audio and video content with standard playback controls
- Build and manage a playback queue of upcoming items
- Use the mini player to keep listening while browsing the app
- Play audio in the background while using other apps
- Set shuffle and repeat modes for playlists and albums
- Adjust playback speed for sermons and podcasts

## How It Works

**Scenario: Playing a sermon and using player controls**
- **Given** I have selected a sermon to play
- **When** the player opens
- **Then** I see play/pause, skip forward, skip back, and a progress bar I can scrub through

**Scenario: Adding items to the queue**
- **Given** I am browsing content while something is playing
- **When** I tap the three-dot menu on an item and select "Add to Queue"
- **Then** the item is added to my Up Next queue and will play after the current item

**Scenario: Using the mini player**
- **Given** content is currently playing
- **When** I navigate to other screens in the app
- **Then** a mini player appears at the bottom showing the current item with basic controls

**Scenario: Playing audio in the background**
- **Given** I am listening to a sermon or music in the app
- **When** I switch to another app or lock my phone
- **Then** the audio continues playing and I can control it from my lock screen or notification shade

**Scenario: Enabling shuffle and repeat**
- **Given** I am playing a playlist or album
- **When** I tap the shuffle icon or the repeat icon on the player screen
- **Then** shuffle randomizes the play order, and repeat loops the playlist or the current item

## Step-by-Step Guide

### Playing Content
1. Find a sermon, song, podcast, or video you want to play
2. Tap the item to open the player
3. Use the **play/pause** button to start or stop playback
4. Tap **skip forward** (15 seconds) or **skip back** (15 seconds) to jump within the content
5. Drag the **progress bar** to scrub to a specific point
<!-- TODO: Screenshot -->

### Managing the Queue
1. While content is playing, tap the **Queue** icon on the player screen
2. View all upcoming items in your queue
3. To add more items, go back to browsing, tap the **three-dot menu** on any item, and select **Add to Queue**
4. In the queue view, drag items to reorder them
5. Swipe left on an item to remove it from the queue
<!-- TODO: Screenshot -->

### Using the Mini Player
1. While content is playing, tap the **back arrow** or navigate to another screen
2. The **mini player** appears at the bottom of the screen
3. Use the mini player's **play/pause** button for quick control
4. Tap the mini player to expand it back to the full player screen
<!-- TODO: Screenshot -->

### Background Playback
1. Start playing audio content (sermons, music, or podcasts)
2. Switch to another app, go to your home screen, or lock your phone
3. Audio continues playing automatically
4. Control playback from your **lock screen**, **notification shade**, or **headphone controls**
<!-- TODO: Screenshot -->

### Adjusting Playback Speed
1. Open the full player screen
2. Tap the **speed** button (it usually shows "1x")
3. Choose your preferred speed: 0.5x, 0.75x, 1x, 1.25x, 1.5x, or 2x
4. The speed change takes effect immediately
<!-- TODO: Screenshot -->

### Using Shuffle and Repeat
1. Open the full player screen while playing a playlist or album
2. Tap the **shuffle icon** to randomize the play order
3. Tap the **repeat icon** once to repeat the entire playlist
4. Tap the **repeat icon** again to repeat only the current item
5. Tap it a third time to turn repeat off
<!-- TODO: Screenshot -->

## Common Issues

| Problem | Solution |
|---------|----------|
| Audio stops when I leave the app | Check your phone's battery settings. Some devices restrict background activity. Allow the app to run in the background. |
| The mini player isn't showing | Make sure content is actively playing. If you fully stopped playback, the mini player will not appear. |
| My queue disappeared | The queue resets when you start playing a new playlist or album. Items added manually to the queue will play in order before moving on. |
| Playback is choppy or buffering | Check your internet connection. If streaming, try switching between Wi-Fi and cellular. For a smoother experience, download the content for offline use. |
| The skip buttons jump too far or not far enough | The default skip interval is 15 seconds. Check your app settings to see if you can customize the skip interval. |
| Video won't play in the background | Background playback is only available for audio content. Video requires the app to be in the foreground. |

## Need Help?
Contact us at support@christgospel.org
