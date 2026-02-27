# Lee Side Dental Care Website

React + Vite frontend with a small Node/Express backend for contact form submission.

## 1. Install dependencies

```bash
npm install
```

## 2. Configure backend email

Copy the backend env template and fill real SMTP credentials:

```bash
copy server\\.env.example server\\.env
```

Required in `server/.env`:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `LEESIDE_RECEIVER_EMAIL` (default is already set to `Leesidedentalcare25@gmail.com`)

## 3. Frontend API URL (optional)

By default, Vite proxy forwards `/api` to `http://localhost:5000`, so this step is optional.

Only set this if you want a different backend URL:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## 4. Run backend and frontend

Terminal 1:

```bash
npm run dev:server
```

Terminal 2:

```bash
npm run dev:client
```

## Contact form behavior

- Endpoint: `POST /api/contact`
- Required fields: `fullName`, `email`, `service`, `message`
- Optional fields: `phone`, `attachment`
- Attachment rules: image only, max 5MB
- Form submissions are emailed to `LEESIDE_RECEIVER_EMAIL`
