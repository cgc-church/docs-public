---
title: Managing Users
description: How to view, search, and manage user accounts and roles in the CGC admin dashboard
---

# Managing Users

## What You Can Do
- View a list of all registered app users
- Search for users by name, email, or account details
- Assign and change user roles
- View and manage family plan memberships
- Export user data for reporting purposes

## How It Works

**Scenario: Searching for a user**
- **Given** I am on the Users screen in the admin dashboard
- **When** I type a name or email address in the search bar
- **Then** matching user accounts are displayed in the results

**Scenario: Assigning a role to a user**
- **Given** I have found a user in the user list
- **When** I click on their account and select a new role from the role dropdown
- **Then** the user's permissions are updated to match the new role

**Scenario: Viewing a user's family plan**
- **Given** I am viewing a user's account details
- **When** I scroll to the Family Plan section
- **Then** I see the family plan details including all members linked to that plan

**Scenario: Exporting user data**
- **Given** I am on the Users screen
- **When** I click **Export** and choose my preferred format
- **Then** a file is downloaded containing the user data for reporting

## User Roles

| Role | What They Can Do |
|------|-----------------|
| **Super Admin** | Full access to everything. Can manage all settings, content, users, and admin features. |
| **Admin** | Can manage content, users, and send notifications. Cannot change system-level settings. |
| **Editor** | Can create and edit content. Cannot manage users or system settings. |
| **Media** | Can upload and manage media files. Cannot edit other content or manage users. |
| **Viewer** | Standard app user. Can view content in the app but has no admin dashboard access. |

## Step-by-Step Guide

### Viewing the User List
1. Log into the admin dashboard.
<!-- TODO: Screenshot -->
2. In the left navigation, click **Users**.
<!-- TODO: Screenshot -->
3. You will see a list of all registered users with their name, email, role, and join date.
<!-- TODO: Screenshot -->

### Searching for a User
1. On the Users screen, locate the search bar at the top.
<!-- TODO: Screenshot -->
2. Type the user's name, email address, or other identifying information.
3. Press **Enter** or click the search icon.
4. The list will filter to show matching results.

### Changing a User's Role
1. Find the user in the user list (use search if needed).
2. Click on the user's name to open their account details.
<!-- TODO: Screenshot -->
3. In the account details, find the **Role** dropdown.
4. Select the new role you want to assign:
   - Super Admin
   - Admin
   - Editor
   - Media
   - Viewer
<!-- TODO: Screenshot -->
5. Click **Save** to apply the change.
6. The user's permissions will update immediately.

### Managing Family Plans
1. Open a user's account details by clicking their name in the user list.
2. Scroll down to the **Family Plan** section.
<!-- TODO: Screenshot -->
3. Here you can see:
   - Whether the user is on a family plan
   - Who the plan owner is
   - All members linked to the plan
4. To add or remove family members, use the controls in this section.

### Exporting User Data
1. On the Users screen, click the **Export** button (usually at the top right).
<!-- TODO: Screenshot -->
2. Choose the format you want (for example, CSV or Excel).
3. Choose any filters you want to apply (for example, only active users, or users with a specific role).
4. Click **Download**.
5. The file will be saved to your computer.

## Common Issues

| Problem | Solution |
|---------|----------|
| I cannot find a user in the list | Make sure you are searching by the correct name or email. Try searching by partial name or email address. |
| Role change is not taking effect | Make sure you clicked **Save** after changing the role. Ask the user to log out and log back in to see updated permissions. |
| I cannot assign the Super Admin role | Only existing Super Admins can promote other users to Super Admin. Contact another Super Admin if you need this done. |
| Export is not downloading | Check your browser's download settings. Try a different browser if the issue persists. Make sure pop-up blockers are not preventing the download. |
| A user says they cannot access the admin dashboard | Verify their role is set to Admin, Editor, Media, or Super Admin. Users with the Viewer role do not have admin access. |

## Need Help?
Contact us at support@christgospel.org
