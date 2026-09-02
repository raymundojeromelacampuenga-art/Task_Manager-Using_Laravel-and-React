# Task Manager — Laravel + Eloquent + Inertia/React

Implements Stages 1–3 from the Week 10–11 walkthrough. Drop these files into a fresh
Laravel project (the one from the Week 10 install steps) at the matching paths:

```
app/Http/Controllers/TaskController.php
app/Models/Task.php
database/migrations/2024_01_01_000000_create_tasks_table.php
routes/web.php
resources/js/Pages/Tasks/Index.jsx
```

## Setup

```bash
# Stage 2 — install nothing new, just migrate
php artisan migrate

# Stage 3 — Inertia + React
composer require inertiajs/inertia-laravel
php artisan inertia:middleware
npm install @inertiajs/react react react-dom
npm install -D @vitejs/plugin-react
npm run dev
```

Make sure `resources/js/app.jsx` (created by `inertia:middleware` / your Breeze/Jetstream
scaffold, or added manually) boots Inertia's `createInertiaApp`, and that
`vite.config.js` includes the `@vitejs/plugin-react` plugin — otherwise the JSX page
won't compile.

## Try it

1. `php artisan serve`
2. Visit `/tasks` — you'll see the Task Manager page (Stage 3), backed by real
   database rows (Stage 2), served through the routes defined in Stage 1.
3. Add a task, check it off (toggles `is_done` via `PATCH /tasks/{task}`), or delete it —
   each action round-trips through Inertia without a full page reload.

## Notes on what was added beyond the handout

The handout's Stage 3 JSX only wired up add/delete. I added a checkbox per task that
calls the `PATCH /tasks/{task}` route (already defined in Stage 2) so the `is_done`
toggle you built is actually reachable from the UI — otherwise that endpoint would go
unused. Everything else follows the walkthrough as written.