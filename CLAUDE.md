# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CommCove** is a unified daily digest application that aggregates content from multiple communication platforms (Slack, Gmail, and GroupMe) and generates AI-powered action drafts. The goal is to eliminate platform hunting by providing organized summaries and starter templates for emails, documents, and to-dos.

## Current Project State

This project is in the **early initialization phase** with minimal codebase. The repository currently contains only configuration files and no application code yet.

## MCP (Model Context Protocol) Servers

This project has MCP servers configured for enhanced development capabilities:

- **Supabase MCP** (project-local via `.mcp.json`): Direct database access, migrations, Edge Functions deployment, and project management
- **Playwright MCP** (global): Browser automation and end-to-end testing capabilities

## Technology Stack

### Confirmed:
- **Backend-as-a-Service**: Supabase (PostgreSQL database + Auth + Edge Functions)
- **MCP Integration**: Model Context Protocol for AI-assisted development

### Expected (based on project requirements):
- **Frontend**: Likely React/Next.js for web UI
- **Backend**: Node.js/TypeScript or Python for API services
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **AI Integration**: LLM API (e.g., OpenAI) for generating action drafts
- **External APIs**: Slack API, Gmail API, GroupMe API

## Architecture

### Key Integration Points:
1. **Multi-Platform Aggregation**: Fetch and consolidate messages from Slack, Gmail, and GroupMe
2. **AI-Powered Summarization**: Generate daily digests with action items and draft templates
3. **Supabase Backend**: Handle data storage, user authentication, and serverless functions
4. **User Interface**: Display digests and allow interaction with generated drafts

### Supabase Configuration

Project Reference: `booizeupwzwkfjofzkjz`
- MCP endpoint configured in `.mcp.json`
- Use Supabase MCP tools for database operations, migrations, and Edge Functions

## Development Workflow

### Database Operations
Use the Supabase MCP tools available through Claude Code:
- `mcp__supabase__list_tables` - View database schema
- `mcp__supabase__execute_sql` - Run SQL queries
- `mcp__supabase__apply_migration` - Apply database migrations
- `mcp__supabase__get_advisors` - Check for security and performance issues

### Edge Functions
Use Supabase MCP for Edge Functions:
- `mcp__supabase__list_edge_functions` - List deployed functions
- `mcp__supabase__deploy_edge_function` - Deploy new or update existing functions
- `mcp__supabase__get_edge_function` - Retrieve function code

### Testing
Use Playwright MCP for browser automation and E2E tests once the frontend is developed.

## Important Notes

- This project uses Cursor IDE with Claude integration
- MCP servers enable direct database and testing operations through Claude Code
- The main branch for pull requests is `main`
