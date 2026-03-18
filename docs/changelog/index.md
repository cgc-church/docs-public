---
title: Changelog
description: Release notes and recent changes across CGC applications
---

# Changelog

> Auto-generated from git history. Do not edit manually.
> Last updated: 2026-03-18 02:11 UTC

## Changes by project

### admin-2.0

#### Feat
- add feedback tickets management page, fix Carousel emblaOptions type errors

#### Fix
- carousel emblaOptions migration and wavesurfer import path
- align CI pnpm version with packageManager field

#### Other
- Add CLAUDE.md and update .gitignore for dual-tool workspace
- Merge pull request #21 from cgc-church/feature/weekly_sermon
- Update navigation and preachers management with weekly sermon integration
- Update README.md with Vercel environment details and Git workflow gui… (#20)
- Enhance playlist management with image selection and API integration (#19)
- Feature/users (Profile, change password) and environment configuration (#17)
- Enhance UserBillingTab and UsersList components with improved payment handling and search functionality (#15)
- functionality for the music area (#13)
- Feature/preachers (#16)
- Feature books crud (#14)
- Feature Sermon (#11)
- Feature/playlist-notifications-users-quoteoftheday (#12)
- Feature/music (#9)

### cgc-core

#### Feat
- initialize @cgc/core shared design system package

#### Other
- Add CLAUDE.md and update .gitignore for dual-tool workspace

### mobile-app

#### Feat
- add weekly sermons API and update featured videos handling
- implement focus-based unmounting for video components
- video thumbnail cards, feedback & ticket detail screens
- videos feed, feedback tickets, sermons hero, UI fixes
- add @cgc/core shared design system dependency
- live timestamps on chat messages, all Xano tools fixed
- AI agent with 13 tools, actions, sentiment, TTS, E2E setup, build fixes
- AI agent fully agentic with 9 tools, search fix, language support
- AI chat UX overhaul — model display, language support, search fix, conversations
- aggressive AI chat retry — exhaust all models before giving up
- AI chat auto-retry with model fallback
- enterprise security hardening, audit logging, admin dashboard, AI credits, bug fixes
- redesign sidebar drawer as 2-column chip grid with improved light mode
- polish UI — theme-aware player/search, Literature home redesign
- theme-aware text, icons, and sidebar colors for all custom themes
- add 5 custom theme families and redesign theme selector
- redesign Music & Radio search cards to match Sermon card layout
- redesign BookSearchCard to match SermonSearchCard layout
- add pre-commit hooks, useDismissOverlay hook, and unit tests for search module
- enhance search functionality with session management and UI improvements
- add EAS build and submit scripts to package.json and update README
- Add BooksListScreen and enhance navigation structure
- Improve layout and functionality
- Improve layout and performance optimizations
- Update navigation structure and screen routing
- Enhance UI and accessibility features
- Enhance search functionality and UI consistency
- Enhance podcast fetching and UI components
- Integrate PDF viewer for sermon documents
- Implement note management features and enhance UI
- enhance SmartSearchContent with recent searches and sorting options
- add search result cards and navigation actions
- update user settings API and enhance SettingsScreen functionality
- Update favorites API endpoint and enhance favorite handling
- apply glassmorphism theme across all screens, modals, and navigation
- Add InsightBanner component for user tips
- Enhance live streaming experience with loading states and animations
- Refactor SmartSearchContent for enhanced UI and theme integration
- Integrate search functionality across multiple components
- Enhance widget list layout with separator and padding
- Enhance MiniPlayer with new layout and theme support
- Revamp radio widget layout and introduce RadioHero component
- Add card hover effect and enhance GlassPlayButton for web
- Add theme selection button to authentication top bars
- Implement theme selection functionality and add dark-blue theme
- Add collapsible sections for improved navigation
- Enhance markdown processing and add header support
- Implement agent logging for audio playback events
- Enhance profile update flow and loading indicator
- Add Family Plan screen to navigation and route names
- Integrate theming across multiple screens for improved UI consistency
- Integrate theming and enhance UI elements
- Enhance toast notifications and modal transparency
- Enhance UI components with new styling and functionality
- Integrate theming for improved UI consistency
- Integrate theming and optimize navigation
- Refactor book fetching and enhance UI with theming
- Introduce navSurface and navSurfaceForeground colors
- Integrate theming and improve UI consistency
- Replace WebView with LiveStreamPlayer component
- Enhance search functionality and UI components
- Enhance image handling and markdown parsing
- Introduce configurable music API base URL and enhance documentation
- Add CGCRadio screen to app layout
- Implement conditional request handling and response structure
- Enhance image processing in markdown blocks
- Introduce configurable base URL and enhance query hooks
- Enhance global styles and Tailwind configuration
- Enhance routing logic and integrate expo-router
- Integrate biometric login and settings management
- Enhance translation handling and input focus management
- Refactor translation query handling and enhance language selection
- Enhance dropdown animations and styles for improved user experience
- Update SummaryStep styles for improved layout
- Integrate AnimatedInputRow for enhanced input feedback in login and sign-up flows
- Refactor country and option selection in sign-up flow
- Refactor authentication screens to use ScrollableScreenLayout
- Implement session management for login and reset password flows
- Add EmailOrPhoneInput component and related tests
- Refactor language selection mechanism for improved usability
- Implement splash screen fallback and enhance app hydration process
- Add configuration files and rules for Cursor agents and commands
- Enhance dark mode support in authentication screens
- Refactor authentication screens to utilize AuthScreenLayout
- Implement LoginOTPScreen tests and refactor sign-up flow
- Enhance login screen tests and configuration
- Introduce AuthLogoHeader component for shared branding
- Update asset paths and enhance styling for authentication screens
- Refactor ForgotPassword and Login screens with shared styles
- Refactor login screen layout and enhance styling
- Enhance project structure and improve component functionality
- refactor navigation structure and enhance screen organization
- Remove Draftbit remnants and enhance project structure
- Update image handling for web compatibility
- Remove Draftbit dependencies and update project guidelines
- Refactor project structure and enhance type definitions
- Enhance project structure with TypeScript support, testing setup, and global styles
- Introduce project rules and guidelines for mobile development
- Add new API endpoints and utilities for authentication, books, music, notes, and lives

#### Fix
- remove duplicate openSearch declaration in SermonsScreen
- remove duplicate favorites section in CGCRadio
- update ID reference in CGCRadio components for podcast and playlist removal
- correct playlist item ID reference in PlaylistDetailMusicScreen
- voice input continuous listening, better TTS voice selection, Playwright screenshots
- tryWithModel renamed to attempt — resolve runtime reference error
- AI chat retry without clutter, message pagination, fault-tolerant init
- update admin analytics dashboard with complete mock data and sections
- selection toolbar uses crystal glass tokens from active theme
- make sermon reader fully theme-aware across all custom themes
- theme-aware cards, fix golden color opacity bug, wire immersive scroll
- make QuickLinksWidget and InsightBanner theme-aware for all custom themes
- bottom sheet scrollable and increase max height to 85%
- add LavaLamp presets for all custom themes and fix theme-aware components
- resolve theme switching bugs and improve reliability
- replace ugly logo+spinner loading state with clean ActivityIndicator
- set audioStartPosition before mounting the player
- Disable vertical scroll indicator for improved UI experience
- derive active bottom tab from route state, move Literature to own tab
- resolve light mode white text and add auto theme mode
- Correct indentation in MusicWidget component
- Adjust horizontal scroll indicator and enhance layout
- Replace legacy icon with LucideIcon for error display

#### Refactor
- update app.config.js for dynamic configuration and modify package.json scripts
- replace Modal with GlassPopover + useDismissOverlay in theme/language popovers
- update components to use inline aspect ratio styles
- Simplify playback logic and enhance UI controls
- Standardize modal styles and improve accessibility
- Enhance password input handling and validation
- Simplify video playback components
- Enhance dark mode support and text color handling
- improve SmartSearchContent layout and functionality
- enhance font loading logic and app readiness checks
- simplify components and enhance UI
- remove bottom padding class from multiple screens
- standardize bottom padding across multiple screens
- improve audio playback handling and state management
- improve error handling and UI elements
- Simplify favorite record handling and improve API response parsing
- enhance audio playback and billing history screens
- Streamline UI components and enhance functionality
- Enhance UI components with new styling and functionality
- Update icon components and color scheme
- Replace 'Inter' font with 'Montserrat' across styles
- Implement theme-aware styling and improve component flexibility
- Enhance layout structure for improved responsiveness
- Enhance bottom navigation styling and functionality
- Update color palette for improved visual consistency
- Update navSurface color for improved visual consistency
- Adjust color values for improved readability
- Update color palette for improved visual consistency
- Introduce GLASS_DARK_BLUE theme for enhanced styling options
- Update lavalamp properties to support dynamic theming
- Update glass styling and improve visual consistency
- Remove unnecessary className property
- Simplify open state management
- Implement dynamic theming and improve styling
- Enhance text styling and loading indicators
- Simplify component structure and enhance audio player integration
- Comment out fetch logging
- Adjust layout and text alignment
- Update icon usage and improve legacy icon mapping
- Update note icon positioning and segment rendering
- Improve loading indicators and error handling
- Enhance markdown processing and URL handling
- Remove Family Plan screen and update navigation
- Update navigation tab item structure and styling
- Replace IconButton with LucideIcon for menu interaction
- Update request handling and API function structure
- Improve book data merging and markdown handling
- Update markdown handling and component imports
- Enhance book data handling and update markdown component usage
- Simplify highlight note retrieval and enhance image URL resolution
- Simplify data readiness checks and improve payload extraction
- reorganize stack into per-screen folders, add routeNames, add screen refactor rule

#### Docs
- Operation Epic Fury — production-grade sweep battle plan
- add summary link for EAS build and TestFlight process in README

#### Chore
- fix dependency resolution, add Playwright screenshot tests
- update postinstall script in package.json and disable aspectRatio in tailwind.config.js
- update app version to 1.19.0 and enable auto-increment for production builds in eas.json
- update build number in app.json to 1.19.0
- update build number in app.json to 1.18.9
- update package.json scripts and dependencies
- TypeScript uplift - types, config, utils, apis, custom-files
- sync Draftbit changes, API updates, and misc improvements

#### Ci
- add GitHub Actions workflow for lint, typecheck, and tests

#### Other
- Merge pull request #13 from cgc-church/fix_favorites
- Merge pull request #12 from cgc-church/feature/expofix
- revert(SmartSearchContent): restore search UI design overwritten by 68bc114
- Merge pull request #11 from cgc-church/radio
- Merge branch 'main' into radio
- Merge pull request #10 from cgc-church/fix/audioplayer
- Merge pull request #9 from cgc-church/profile
- Merge pull request #8 from cgc-church/fix_sermon
- Merge branch 'main' into fix_sermon
- Merge pull request #7 from cgc-church/fix/audiopalyer
- Merge branch 'main' into fix/audiopalyer
- Merge branch 'main' into fix/audiopalyer
- Enhance typography and layout for widgets and screens
- Merge pull request #6 from cgc-church/fix_sermon
- Merge branch 'main' into fix_sermon
- Manual merge
- Merge pull request #5 from cgc-church/fix_search
- Merge pull request #4 from cgc-church/feature/highlights
- Merge pull request #3 from cgc-church/fixes_user_profile
- Merge remote-tracking branch 'origin/main' into main (resolve BottomNavbarBlock conflict)
- Merge pull request #2 from cgc-church/fixes
- Merge branch 'main' into fixes
- Merge branch main into fixes
- Merge pull request #1 from cgc-church/search
- Merge branch 'main' into search
- Initial commit: CGC React Native mobile app

### subscriptions

#### Ci
- add GitHub Actions workflow for lint and build

#### Other
- Add CLAUDE.md and update .gitignore for dual-tool workspace
- Enhance Hero Component with Animated Gradient Swash
- Enhance Landing Page with New Hero Divider and Tailwind Adjustments
- Enhance Landing Page with New Visual Elements and Tailwind Configurations
- Initialize CGC+ Subscription Project with Next.js, Tailwind CSS, and Essential Configurations

### qa-cycle

#### Ci
- add GitHub Actions workflow for build verification

#### Other
- Add CLAUDE.md and update .gitignore for dual-tool workspace

