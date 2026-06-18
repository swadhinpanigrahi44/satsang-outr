# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest (main branch) | Yes |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public GitHub issue.

Instead, email: **swadhinpanigrahi44@gmail.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

You will receive a response within 72 hours. If the issue is confirmed, a fix will be released as soon as possible.

## Security Scope

This is a static frontend application (React + Vite) deployed on Vercel. There is no backend server or database.

**In scope:**
- Cross-site scripting (XSS)
- Sensitive data exposure in client-side code
- Dependency vulnerabilities with direct exploitability

**Out of scope:**
- Denial of service against the CDN (handled by Vercel)
- Social engineering attacks
- Issues in third-party services (Instagram, WhatsApp, LinkedIn)
