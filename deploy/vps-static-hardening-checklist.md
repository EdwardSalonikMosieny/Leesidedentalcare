# VPS Static Hosting Hardening Checklist

Run these on the VPS as a sudo-capable user. Replace paths/domains only if your production path differs from `/home/salonik/app/dist`.

## 1. Stop and remove Node/PM2 services

```bash
pm2 list || true
pm2 delete all || true
pm2 save --force || true
pm2 unstartup || true
```

Check for remaining Node listeners:

```bash
sudo ss -tulpn | grep -E ':(3000|5000)\b|node|pm2' || echo "No Node/PM2 listeners found"
```

If anything is still listening on 3000 or 5000, stop the owning service before continuing.

## 2. Install the Nginx static config

```bash
sudo cp deploy/nginx-static-site.conf /etc/nginx/sites-available/leesidedentalcareltd.co.ke
sudo ln -sf /etc/nginx/sites-available/leesidedentalcareltd.co.ke /etc/nginx/sites-enabled/leesidedentalcareltd.co.ke
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

If SSL has not been issued yet, temporarily remove the HTTPS server block and the HTTP `return 301`, then run Certbot:

```bash
sudo certbot --nginx -d leesidedentalcareltd.co.ke -d www.leesidedentalcareltd.co.ke
```

After Certbot succeeds, restore the HTTPS redirect and reload Nginx.

## 3. Lock down UFW

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw delete allow 3000/tcp || true
sudo ufw delete allow 5000/tcp || true
sudo ufw enable
sudo ufw status verbose
```

Expected allowed incoming ports: `22/tcp`, `80/tcp`, and `443/tcp` only.

## 4. Verify public exposure

From the VPS:

```bash
sudo ss -tulpn
curl -I http://127.0.0.1:3000 || true
curl -I http://127.0.0.1:5000 || true
curl -I https://leesidedentalcareltd.co.ke
```

From another machine:

```bash
curl -I http://leesidedentalcareltd.co.ke
curl -I https://leesidedentalcareltd.co.ke
curl --connect-timeout 5 http://leesidedentalcareltd.co.ke:3000 || true
curl --connect-timeout 5 http://leesidedentalcareltd.co.ke:5000 || true
```

Expected result: ports `3000` and `5000` fail to connect, HTTP redirects to HTTPS, and HTTPS returns the static site with security headers.

## 5. Final secure state

- Nginx is the only public web server.
- Production root is `/home/salonik/app/dist`.
- No PM2 process is running.
- No Node process listens on public or localhost ports for this site.
- Nginx `autoindex` is off.
- UFW allows only SSH, HTTP, and HTTPS.
- `/api/*` is not proxied to any backend service.
- Security headers are present on HTTPS responses.
