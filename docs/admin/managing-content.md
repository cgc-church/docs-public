---
title: Managing Content
description: How to create, edit, and publish content using the CGC admin dashboard
---

# Managing Content

## What You Can Do
- Create new sermons, music, books, videos, and podcasts
- Edit existing content details such as titles, descriptions, and tags
- Upload media files (audio, video, images)
- Publish content immediately or schedule it for a future date
- Unpublish or archive content that is no longer needed
- Organize content with categories, topics, and tags

## How It Works

**Scenario: Creating a new sermon entry**
- **Given** I am logged into the admin dashboard
- **When** I go to **Content > Sermons** and click **Add New**
- **Then** I see a form to enter the sermon title, preacher, date, scripture references, and upload the audio or video file

**Scenario: Editing an existing piece of content**
- **Given** I am on the Content list screen
- **When** I click on a content item to open it
- **Then** I can edit the title, description, tags, and media files, then save my changes

**Scenario: Scheduling content for future publication**
- **Given** I am creating or editing a content item
- **When** I set the **Publish Date** to a future date and click **Schedule**
- **Then** the content will automatically become available in the app on that date

**Scenario: Unpublishing content**
- **Given** I am viewing a published content item in the admin dashboard
- **When** I click **Unpublish**
- **Then** the content is removed from the app but is still available in the admin dashboard for future use

**Scenario: Uploading a media file**
- **Given** I am creating a new content item
- **When** I click **Upload** and select an audio or video file from my computer
- **Then** the file is uploaded and attached to the content item

## Content Types

| Type | Description |
|------|-------------|
| **Sermons** | Audio and video recordings of messages. Includes preacher name, date, scripture references, and topic tags. |
| **Music** | Songs and worship recordings. Includes artist, album, and track details. |
| **Books** | Written content such as devotionals and study materials. Can include text, PDF, or eBook files. |
| **Videos** | Video recordings for teaching, events, and announcements. |
| **Podcasts** | Episodic audio content organized by series. |

## Step-by-Step Guide

### Creating New Content
1. Log into the admin dashboard.
<!-- TODO: Screenshot -->
2. In the left navigation, click **Content** and then select the content type (for example, **Sermons**).
<!-- TODO: Screenshot -->
3. Click **Add New** at the top of the content list.
<!-- TODO: Screenshot -->
4. Fill in the required fields:
   - **Title** -- The name of the content.
   - **Description** -- A brief summary of what this content is about.
   - **Category/Topic** -- Select the appropriate category or topic tags.
<!-- TODO: Screenshot -->
5. Upload any media files by clicking **Upload** and selecting the file from your computer.
<!-- TODO: Screenshot -->
6. Choose your publishing option:
   - **Publish Now** -- Makes the content immediately available in the app.
   - **Schedule** -- Set a future date and time for automatic publication.
   - **Save as Draft** -- Saves your work without making it visible to app users.
7. Click **Save** or **Publish**.

### Editing Existing Content
1. In the admin dashboard, go to **Content** and select the content type.
2. Find the item you want to edit using the search bar or by browsing the list.
<!-- TODO: Screenshot -->
3. Click on the content item to open the editor.
4. Make your changes to any field.
5. Click **Save** to update the content.

### Scheduling Content
1. While creating or editing a content item, look for the **Publish Date** field.
<!-- TODO: Screenshot -->
2. Click the date picker and choose the date and time you want the content to go live.
3. Click **Schedule**.
4. The content will appear with a "Scheduled" status in your content list.

### Unpublishing or Archiving Content
1. Open the content item you want to remove from the app.
2. Click **Unpublish** to remove it from the app while keeping it in the admin dashboard.
3. To archive content, click **Archive**. Archived content is moved to the archive section and can be restored later.

## Common Issues

| Problem | Solution |
|---------|----------|
| My uploaded file is rejected | Check the file format and size. Supported audio formats include MP3 and M4A. Supported video formats include MP4. Maximum file sizes may apply. |
| Content is not showing in the app after publishing | Allow a few minutes for the content to sync. If it still does not appear, check that the content status is set to "Published" and not "Draft" or "Scheduled." |
| Scheduled content did not publish at the set time | Verify the date and time zone are correct. The system uses the time zone configured in your admin settings. |
| I accidentally unpublished content | Go to the content list, find the item (it will show as "Unpublished" or "Draft"), open it, and click **Publish** again. |
| I cannot upload large video files | Large files may take longer to upload. Make sure you have a stable internet connection. If the file exceeds the size limit, try compressing the video before uploading. |

## Need Help?
Contact us at support@christgospel.org
