/* global process */
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import multer from 'multer'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 5000)

const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
const receiverEmail =
  process.env.LEESIDE_RECEIVER_EMAIL || 'Leesidedentalcare25@gmail.com'

const isDevLocalOrigin = (origin) => {
  try {
    const parsed = new URL(origin)
    const isHttp = parsed.protocol === 'http:' || parsed.protocol === 'https:'
    const isLocalHost =
      parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1'
    return isHttp && isLocalHost
  } catch {
    return false
  }
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || origin === frontendOrigin || isDevLocalOrigin(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Not allowed by CORS'))
    },
  })
)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
})

const allowedImageMimeTypes = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
])

const createTransporter = () => {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error(
      'Missing SMTP config. Set SMTP_HOST, SMTP_USER and SMTP_PASS in server .env.'
    )
  }

  const port = Number(process.env.SMTP_PORT || 587)
  const secure = process.env.SMTP_SECURE === 'true'

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

const requiredFields = ['fullName', 'email', 'service', 'message']

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

app.post('/api/contact', upload.single('attachment'), async (req, res) => {
  try {
    for (const field of requiredFields) {
      if (!req.body?.[field]) {
        return res.status(400).json({
          ok: false,
          error: `Missing required field: ${field}`,
        })
      }
    }

    if (req.file && !allowedImageMimeTypes.has(req.file.mimetype)) {
      return res.status(400).json({
        ok: false,
        error: 'Only image files are allowed for attachment.',
      })
    }

    const transporter = createTransporter()

    const fullName = req.body.fullName.trim()
    const email = req.body.email.trim()
    const phone = (req.body.phone || 'Not provided').trim()
    const service = req.body.service.trim()
    const message = req.body.message.trim()

    const safeFullName = escapeHtml(fullName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeService = escapeHtml(service)
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: receiverEmail,
      replyTo: email,
      subject: `Leeside Dental Contact Form: ${service}`,
      text: [
        'New contact request from website.',
        '',
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${safeFullName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
              contentType: req.file.mimetype,
            },
          ]
        : [],
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({
        ok: false,
        error: 'Attachment is too large.',
        hint: 'Upload an image below 5MB.',
      })
    }

    if (error instanceof Error && error.message.includes('Missing SMTP config')) {
      return res.status(500).json({
        ok: false,
        error: 'Email server is not configured.',
        hint: 'Set SMTP_HOST, SMTP_USER and SMTP_PASS in server/.env and restart npm run dev:server.',
      })
    }

    const message =
      error instanceof Error ? error.message : 'Unexpected server error'
    res.status(500).json({
      ok: false,
      error: message,
      hint: 'Check backend terminal logs for details.',
    })
  }
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
