# GitHub Secrets for Deployment

Go to: `Repository > Settings > Secrets and variables > Actions > New repository secret`

| Secret Name | Value |
|---|---|
| `SSH_HOST` | `72.62.36.97` |
| `SSH_USER` | `salonik` |
| `SSH_PRIVATE_KEY` | Your deployment private key (ed25519) |
| `SSH_KNOWN_HOSTS` | Use the value below |
| `PROD_PATH` | `/home/salonik/app` |

## `SSH_KNOWN_HOSTS` value

Paste these 3 lines exactly:

```text
|1|eDxHFi0LKSDmzcHwiJqjK6k2TyA=|wUoXxmicTy/ignnoQAvNUr1GQWE= ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDXAbuQyyIjvFDgP/tt8nrhSHjZcTEQYBzLn/ENFmVGlAq9L+Bh5Y4wnAM5PFdTGoWVKeN+mWG0auMC5MF2ZocNNgRUPVOtIBBpaBPEWVzZAQX02DewN0A6ejG3Pb+D3PIotxzdVn6WotJ9RftBjRM4BNjyN//yVR5yGMoe1oCJNZfkKa6tFfsXhKKj6GB+1zJCyw1ZBu7Tv4Y3pdczCVcC0Pto1H7i4nrqCtvdFgN8PUJWmrp7AeQPyTpDIBDb2lMpouAIjD0ADqVmcN9BDz/Tuc3CxM5e0rw2tBFnKrGWpwr0oZfhx2DWXvo+ggyrY6ZuXnFfOW1v0Kb/E7iCnRI6NERSDNz3LM65HIlAtujJRn3IpZo12tsCpziKxScpWDvQpd1G+3c77Fx1MzK7kkHFf3drb5SdLhD580V8U6yDK1+7B2BLSbEjm7PVX9ZzZlU+KWETmhbkp9g+VspfM6jEgTjeFA3wfizmKDLlhUcuadCFCjUapfizduPWA+6b22E=
|1|0jIDFeSs4d5h6vGd5wI1WmkMKPA=|znJF7g2VMbzEVoObK2JmMLn1raw= ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBMKwkajVrNGmXJRnLpaZGfLtv3nUyMEQKVbXKsbaYfi4oM4I0PUGnP6FllhiO/paEshiZ3D8QW4zm1AtAIpsFkc=
|1|FC7MTxjT/85dhapKVlL8spvUSjI=|CrCG83FA/592KaCnOK2qtmMIXhM= ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIgzzRzcHO66VAt35Y/0tebUfodof71q/b3aceoNmV9+
```

## Notes

- `PROD_PATH` can be changed to a subfolder (example: `/home/salonik/app/frontend`).
- Workflow deploys on push to `main`.
- Build must pass before deploy.
