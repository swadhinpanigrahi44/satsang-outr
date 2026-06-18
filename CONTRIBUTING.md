# Contributing to Satsang OUTR

Thank you for your interest in contributing.

## Development Setup

```bash
git clone https://github.com/swadhinpanigrahi44/satsang-outr.git
cd satsang-outr
npm install
npm run dev
```

## Guidelines

**Content changes** (text, images, events, social links):
- All content lives in `src/data/` and `src/features/*/data/`
- No logic changes required — edit the data files directly

**Code changes:**
- Run `npm run build` before submitting — no TypeScript errors allowed
- Follow the existing design token system (`hsl(var(--brand-primary))`) — no hardcoded hex colors
- Match the existing component style (AnimatedSection, SpiritualCard, SectionHeading)
- Keep components small and focused; complex data belongs in `src/data/`

**Commits:**
- Use conventional commit format: `feat:`, `fix:`, `chore:`, `docs:`
- Keep messages concise and descriptive

## Pull Requests

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Make your changes, run `npm run build`
4. Open a pull request against `main`

The maintainer reviews all PRs. Only the repository owner can merge.
