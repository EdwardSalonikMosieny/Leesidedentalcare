# Lee Side Dental Care Website

React + Vite static website for Lee Side Dental Care. Production hosting should serve the generated `dist/` directory with Nginx only.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Upload only the contents of `dist/` to the VPS production path and serve them with Nginx. Do not run Node, Express, PM2, Vite preview, or any custom application port in production.

## VPS Static Hosting

- Nginx sample config: `deploy/nginx-static-site.conf`
- VPS audit checklist: `deploy/vps-static-hardening-checklist.md`
- GitHub workflow: `.github/workflows/deploy-prod.yml`
- Required GitHub Actions secrets: `SECRETS.md`
