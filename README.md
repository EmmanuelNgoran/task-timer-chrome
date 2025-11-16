# Task Timer Chrome Extension

A Chrome extension for tracking time spent on tasks and staying productive.

## Technology Stack

This extension has been modernized to use current web technologies:

### Current Technologies (Updated)
- **Manifest V3** - Latest Chrome extension manifest version
- **ES6+ JavaScript** - Modern JavaScript syntax including:
  - `let`/`const` instead of `var`
  - Arrow functions
  - Template literals
  - Async/await patterns
- **Chrome Extension APIs** - Modern Chrome extension APIs
- **Chrome Storage API** - Replacing localStorage for background persistence

### Legacy Technologies (Being Phased Out)
- jQuery 2.0.3 (working towards update to 3.7+)
- jQuery UI 1.10.3 (working towards update to 1.13+)

## Installation

### For Development
1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Features
- Track time spent on multiple tasks
- Set goals for each task
- Visual progress indicators
- Pie charts for time usage
- Desktop notifications when tasks complete
- Task history tracking
- Chrome sync support (experimental)

## Recent Modernization Updates

### Manifest V3 Migration
- Converted from deprecated Chrome Packaged App to Chrome Extension
- Updated background scripts to service workers
- Migrated from `chrome.app.*` APIs to `chrome.runtime.*` and `chrome.action.*`
- Updated permissions and resource declarations for V3 compatibility

### JavaScript Modernization
- Converted `var` declarations to `let`/`const`
- Implemented arrow functions for callbacks
- Used template literals for string interpolation
- Updated for loops to use block-scoped variables

### API Updates
- Replaced `chrome.app.getDetails()` with `chrome.runtime.getManifest()`
- Updated background worker to use `chrome.storage.local` instead of localStorage
- Implemented async/await patterns in background service worker

## Browser Compatibility
- Chrome 88 or higher (due to Manifest V3 requirements)

## License
This project is open source. Please see the original author's licensing information.

## Credits
Created by Schuyler Cebulskie
