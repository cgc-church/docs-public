---
title: Feedback Tickets
description: How to view and manage user feedback and support tickets in the CGC admin dashboard
---

# Feedback Tickets

## What You Can Do
- View all feedback and support tickets submitted by app users
- Read the details of each ticket including the user's message and contact information
- Respond to tickets directly from the admin dashboard
- Update ticket status (Open, In Progress, Resolved, Closed)
- Prioritize tickets based on urgency
- Filter and search tickets to find specific issues

## How It Works

**Scenario: Viewing incoming feedback tickets**
- **Given** I am logged into the admin dashboard
- **When** I go to **Feedback** or **Tickets**
- **Then** I see a list of all user-submitted tickets sorted by newest first

**Scenario: Responding to a ticket**
- **Given** I am viewing an open feedback ticket
- **When** I type a response in the reply field and click **Send**
- **Then** the user receives my response and the ticket is updated with the reply

**Scenario: Changing ticket status**
- **Given** I am viewing a feedback ticket
- **When** I change the status from **Open** to **In Progress**
- **Then** the ticket is marked as being worked on and the status update is visible in the ticket history

**Scenario: Resolving a ticket**
- **Given** I have addressed the user's issue and sent a response
- **When** I change the ticket status to **Resolved**
- **Then** the ticket is moved to the resolved list and the user is notified that their issue has been addressed

## Ticket Statuses

| Status | Meaning |
|--------|---------|
| **Open** | New ticket that has not been reviewed yet |
| **In Progress** | A team member is actively working on this issue |
| **Resolved** | The issue has been addressed and a response has been sent |
| **Closed** | The ticket is complete and no further action is needed |

## Step-by-Step Guide

### Viewing Tickets
1. Log into the admin dashboard.
<!-- TODO: Screenshot -->
2. In the left navigation, click **Feedback** or **Tickets**.
<!-- TODO: Screenshot -->
3. You will see a list of tickets with the following details:
   - Subject or title
   - User name and email
   - Date submitted
   - Current status
   - Priority level
<!-- TODO: Screenshot -->

### Responding to a Ticket
1. Click on a ticket to open its details.
<!-- TODO: Screenshot -->
2. Read the user's message carefully.
3. Type your response in the **Reply** field at the bottom.
<!-- TODO: Screenshot -->
4. Click **Send** to deliver your response to the user.
5. The response will appear in the ticket conversation history.

### Updating Ticket Status
1. Open the ticket you want to update.
2. Find the **Status** dropdown (usually near the top of the ticket).
<!-- TODO: Screenshot -->
3. Select the appropriate status:
   - **In Progress** -- when you are actively working on the issue
   - **Resolved** -- when the issue has been addressed
   - **Closed** -- when no further action is needed
4. The status change is saved automatically.

### Prioritizing Tickets
1. Open the ticket you want to prioritize.
2. Find the **Priority** field.
<!-- TODO: Screenshot -->
3. Set the priority level:
   - **High** -- Urgent issues that need immediate attention
   - **Medium** -- Important but not urgent
   - **Low** -- General feedback or minor issues
4. High-priority tickets will appear at the top of the list when sorted by priority.

### Searching and Filtering Tickets
1. On the Tickets screen, use the search bar to find tickets by keyword, user name, or email.
2. Use the filter options to narrow results by:
   - Status (Open, In Progress, Resolved, Closed)
   - Priority (High, Medium, Low)
   - Date range
<!-- TODO: Screenshot -->

## Common Issues

| Problem | Solution |
|---------|----------|
| I cannot see any tickets | Check your role permissions. Only Admins and Super Admins can view feedback tickets. |
| My reply was not sent | Make sure you clicked **Send** after writing your response. Check your internet connection and try again. |
| I accidentally closed a ticket | Reopen the ticket by changing the status from **Closed** back to **Open** or **In Progress**. |
| Tickets are not sorted correctly | Click the column headers to sort by date, priority, or status. Check your active filters to make sure they are not hiding tickets. |
| A user says they did not receive my response | Verify the user's email address is correct in their account. Ask them to check their spam or junk folder. |

## Need Help?
Contact us at support@christgospel.org
