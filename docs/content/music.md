---
title: Music
description: Browse, play, and enjoy music from the CGC music library
---

# Music

## What You Can Do
- Browse songs, albums, artists, and genres
- Play individual songs or full albums
- Create and manage a playback queue
- Use shuffle and repeat modes
- Listen to music in the background while using other apps
- Search for specific songs, albums, or artists

## How It Works

**Scenario: Browsing the music library by artist**
- **Given** I am on the Music screen
- **When** I tap the **Artists** tab
- **Then** I see a list of all available artists and can tap one to view their songs and albums

**Scenario: Playing a song**
- **Given** I am viewing a list of songs
- **When** I tap on a song title
- **Then** the song begins to play and playback controls appear at the bottom of the screen

**Scenario: Adding a song to the queue**
- **Given** a song is currently playing
- **When** I long-press (or tap the menu icon on) another song and select **Add to Queue**
- **Then** that song is added to the end of my playback queue

**Scenario: Enabling shuffle mode**
- **Given** I am on the Now Playing screen
- **When** I tap the **Shuffle** icon
- **Then** songs in my queue play in a random order

**Scenario: Listening in the background**
- **Given** music is currently playing in the app
- **When** I switch to another app or lock my device
- **Then** the music continues to play in the background

## Step-by-Step Guide

### Browsing Music
1. Open the app and tap **Music** from the main menu or home screen.
<!-- TODO: Screenshot -->
2. Use the tabs at the top to browse by **Songs**, **Albums**, **Artists**, or **Genres**.
<!-- TODO: Screenshot -->
3. Tap any category to explore its contents.

### Playing Music
1. Find a song you want to listen to by browsing or searching.
2. Tap the song title to start playback.
<!-- TODO: Screenshot -->
3. The Now Playing bar appears at the bottom of the screen. Tap it to expand the full player.
<!-- TODO: Screenshot -->
4. Use the playback controls:
   - **Play/Pause** -- Start or pause the current song.
   - **Next/Previous** -- Skip to the next or previous song.
   - **Progress bar** -- Drag to jump to a specific part of the song.

### Managing Your Queue
1. While a song is playing, tap the **Queue** icon on the Now Playing screen.
<!-- TODO: Screenshot -->
2. To add a song to the queue, go back to the music library, long-press a song, and select **Add to Queue**.
3. In the queue view, you can reorder songs by dragging them or remove songs by swiping.
<!-- TODO: Screenshot -->

### Using Shuffle and Repeat
1. Open the Now Playing screen by tapping the playback bar at the bottom.
2. Tap the **Shuffle** icon to play songs in random order. The icon will highlight when active.
<!-- TODO: Screenshot -->
3. Tap the **Repeat** icon to cycle through repeat modes:
   - **Repeat All** -- Loops through all songs in the queue.
   - **Repeat One** -- Loops the current song.
   - **Off** -- No repeat.
<!-- TODO: Screenshot -->

### Background Playback
1. Start playing any song or album.
2. Switch to another app, go to your home screen, or lock your device.
3. Music continues playing. Use your device's lock screen controls or notification panel to pause, skip, or adjust volume.
<!-- TODO: Screenshot -->

## Common Issues

| Problem | Solution |
|---------|----------|
| Music stops when I leave the app | Make sure background playback is enabled in your device settings. On some devices, battery optimization may stop background audio -- add the app to your battery exceptions list. |
| Song won't play | Check your internet connection. The song may still be loading. Try tapping it again. |
| Shuffle is not working | Make sure you have more than one song in your queue. Tap the shuffle icon to ensure it is active (highlighted). |
| Can't find a song or artist | Use the search bar at the top of the Music screen. Try searching by song title, artist name, or album name. |
| Audio quality is poor | Check your internet connection speed. If you are on a slow connection, playback quality may be reduced. |

## Need Help?
Contact us at support@christgospel.org
