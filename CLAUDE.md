# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Start Development Server
```bash
npm start
# Runs: npx enhance dev
```

### Linting
```bash
npm run lint
# Runs: eslint ./app/**/*.mjs --fix
```

### Testing
```bash
npm test
# Runs: tape tests/*-test.js | tap-arc
```

### Deployment
```bash
# Quick commit and push
git commit -a -m "wip" --no-verify && git push origin HEAD

# Deploy to staging
arc deploy --staging

# Deploy to production
arc deploy --production
```

### Logs
```bash
# View staging logs
arc logs staging app/get-index

# View production logs
arc logs production src/http/get-index
```

## Architecture Overview

This is an ASVAB (Armed Services Vocational Aptitude Battery) study platform built with **Enhance** framework on AWS Architect.

### Core Framework
- **Enhance**: Web framework for building server-side rendered apps
- **AWS Architect**: Infrastructure as code for AWS serverless deployment
- **Session-based authentication** with DynamoDB storage

### Directory Structure

#### `/app/api/` - Server-side API endpoints
- Route handlers that return JSON or redirect responses
- Session management and authentication logic
- Stripe payment processing integration
- Database operations using `arc.tables()`

#### `/app/elements/` - Custom HTML elements (components)
- Server-side rendered components that return HTML strings
- Naming convention: `my-[component-name].mjs`
- Used in pages via custom HTML tags like `<my-quiz></my-quiz>`

#### `/app/pages/` - Static HTML templates
- HTML files that include custom elements
- Dynamic routes use `$` prefix (e.g., `$quiz.html`, `$guide.html`)

#### `/app/utils/` - Shared utilities
- `questionBank.mjs`: Contains all ASVAB questions organized by subject
- `session.mjs`: Session management utilities
- `asvabSections.mjs`: ASVAB test section definitions
- `studyGuides.mjs`: Study guide content

#### `/app/browser/` - Client-side JavaScript
- Frontend scripts for interactive features
- Quiz functionality and score calculation

### Key Patterns

#### Custom Elements
Components are defined as functions that return HTML strings:
```javascript
export default function MyComponent(state) {
  const { store = {} } = state
  return `<div>Component HTML</div>`
}
```

#### API Routes
API endpoints use HTTP method exports:
```javascript
export async function get(req) {
  return { json: { data: 'response' } }
}

export async function post(req) {
  return { location: '/redirect-path' }
}
```

#### Session Management
- Use `getSessionAccount(req)` to get current user
- Use `setSessionAccount(account)` to update session
- Use `createSessionFromLogin(email)` for login flow

#### Database Access
```javascript
import arc from '@architect/functions'
const data = await arc.tables()
const account = await data.accounts.get({ email })
```

### External Integrations
- **Stripe**: Payment processing for subscriptions
- **AWS SES**: Email sending
- **KaTeX**: Mathematical equation rendering for quiz questions
- **Google Analytics**: User tracking

### Quiz System
- Questions stored in `questionBank.mjs` with detailed explanations
- Math questions use LaTeX formatting for KaTeX rendering
- Progress tracking with session-based scoring
- Multiple quiz types: arithmetic reasoning, mathematics knowledge, etc.

## Environment URLs
- **Staging**: https://staging.asvabdrill.com/
- **Production**: https://asvabdrill.com/