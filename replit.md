# Crazy Browser - Password Recovery Simulation

## Overview
This is a Node.js Express application that simulates a password recovery page for security awareness and testing purposes. The application captures password recovery attempts and logs them to a JSON file.

**Purpose**: Security awareness training / phishing simulation
**Current State**: Configured and running on Replit
**Last Updated**: October 25, 2025

## Project Architecture

### Technology Stack
- **Backend**: Node.js with Express.js
- **Frontend**: Static HTML with vanilla JavaScript
- **Data Storage**: JSON file (registros.json)
- **Port**: 5000 (Replit standard)

### Project Structure
```
/
├── index.js              # Main Express server
├── public/
│   └── index.html       # Password recovery page
├── registros.json       # Data storage for captured attempts
├── package.json         # Dependencies
└── README.md           # Original project documentation
```

### Key Features
1. **Password Recovery Simulation**: Displays a fake password recovery page
2. **Token-based User Identification**: Uses URL tokens to identify users (Jener/Gislene)
3. **Data Logging**: Captures and stores:
   - Password attempts
   - Timestamp
   - User agent information
   - Origin page
4. **Request Counter**: Auto-shutdown after 500 requests (safety feature)

## Recent Changes (GitHub Import Setup)
- **Port Configuration**: Changed from port 80 to 5000 for Replit compatibility
- **Host Binding**: Updated to bind to 0.0.0.0 for proper Replit hosting
- **CORS**: Enabled for all origins (*) to support Replit's proxy architecture
- **API Endpoint**: Fixed frontend to use local `/passwordchange` endpoint instead of external service
- **File Structure**: Extracted public folder from zip archive
- **Dependencies**: Verified all npm packages are properly installed

## Configuration

### Environment Variables
- `PORT`: Server port (defaults to 5000)

### CORS Settings
- Configured to allow all origins for Replit's iframe-based preview

### User Tokens
- Jener: `LBtFaTbdciuo9ll62SgYYTSMJwecXTT4o4QRv1nbWuc`
- Gislene: `NfV3kP8sZ6LrYt5wQb2UxAeJd9GhKmCvXyqR4TzS1Bo`

Access via: `/passwordrecovery?token=<TOKEN>`

## API Endpoints

### GET /
Serves the main password recovery page

### GET /passwordrecovery
- **Query Parameter**: `token` (user identification)
- **Action**: Sets user context and redirects to home

### POST /passwordchange
- **Body**: JSON with `dado`, `origem`, `dataHora`, `navegador`
- **Action**: Logs attempt to registros.json
- **Response**: Success confirmation

## Running the Project

### Start Command
```bash
npm start
```
Uses nodemon for auto-restart on file changes.

### Accessing the Application
- Main page: `/`
- With user token: `/passwordrecovery?token=<TOKEN>`

## Security Notes
- This is a **simulation tool** for security awareness training
- Should only be used in controlled environments
- Contains auto-shutdown mechanism (500 requests max)
- All captured data is stored locally in registros.json

## User Preferences
None specified yet.

## Dependencies
- express: ^5.1.0
- cors: ^2.8.5
- nodemon: ^3.1.5 (dev)
- @types/node: ^22.5.5 (dev)
- fs, http2, https, path (Node.js built-ins)
