# Deploying Patelution Backend on Railway

This project is configured for [Railway](https://railway.app). Push the `backend` folder (or monorepo root) and connect the service; the build and start commands are set in `railway.json`.

## 1. Create a Railway project

- Go to [railway.app](https://railway.app) and create a new project.
- Add a **PostgreSQL** plugin (or use an existing Postgres service). Railway will set `DATABASE_URL` for you if you link the database to the service.
- Add a new **service** from this repo and set the **root directory** to `backend` (if the repo root contains both `web` and `backend`).

## 2. Environment variables to add

In your Railway **backend service** → **Variables**, add:

| Variable        | Required | Description |
|----------------|----------|-------------|
| `DATABASE_URL` | **Yes**  | PostgreSQL connection string. If you added the Postgres plugin and linked it to this service, Railway may inject this automatically. Otherwise set it manually (e.g. `postgresql://user:password@host:5432/railway`). |
| `JWT_SECRET`   | **Yes**  | Secret used to sign JWTs. Use a long random string (e.g. 64+ character hex). **Do not use the example below in production**; generate your own and keep it private. |
| `PORT`         | No       | Railway sets this automatically. Only override if needed. |
| `CORS_ORIGIN`  | No       | Comma-separated list of allowed frontend origins (e.g. your Vercel or custom domain). Default if unset: `http://localhost:3000`. Example: `https://patelution.vercel.app,https://www.yourdomain.com` |

### Generated JWT secret (use once, then rotate if needed)

You can use this as a starting value for `JWT_SECRET` (recommended: generate a new one per environment and store it securely):

```
9c370e4d42699edabd422f6e4bad91b108c9cb87b5c1863fd9c3208c37d572bcbfe04fc0b6d092ff703908b7597d3f55891ca3e6dcf6e859b082a0678408c93a
```

Generate a new one locally with:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## 3. Build and deploy

- **Build**: `npx prisma generate && npm run build` (configured in `railway.json`).
- **Start**: `npx prisma migrate deploy && npm run start:prod` — migrations run **when the service starts**, so tables are created automatically on first deploy (or when you redeploy). Then the API server starts.

No need to set build/start in the Railway UI; `railway.json` in the backend folder defines them.

## 4. After deploy

- Open the generated URL (e.g. `https://your-service.up.railway.app`) and confirm the API responds.
- Set your frontend’s API base URL to this URL and add it to `CORS_ORIGIN` so the browser can call the backend.
