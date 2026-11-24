# Tend frontend

A responsive React + TypeScript PWA for **Tend — A little care, every day.** It uses Vite, Tailwind CSS, TanStack Query, React Router, Recharts, and Lucide icons.

## Working experiences

- Account registration and login against the Spring Boot API
- Calm daily dashboard, energy-aware deterministic suggestion, mood check-in
- Quick brain dump capture
- Searchable brain dumps, goals, tasks, and routines with create/complete/delete flows
- Minimum viable actions, scheduled tasks, energy needs, and flexible recurrence text
- Custom life-space creation and archival
- Weekly priorities and optional reflection
- Mood trend chart that distinguishes missing data from zero
- Responsive sidebar/bottom navigation and installable PWA manifest

## Run locally

Start the backend first, then:

```bash
cp .env.example .env
npm install
npm run dev
```

Open `http://localhost:5173`. Production build: `npm run build`. Tests: `npm test`.

The UI contains no hardcoded personal records. All user-created core data persists through the backend. See [ROADMAP.md](ROADMAP.md) for intentionally deferred work.
