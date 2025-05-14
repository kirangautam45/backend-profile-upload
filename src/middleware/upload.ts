// controllers/profileController.ts
import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir)
  },
  filename: (_req, file, cb) => {
    const timestamp = Date.now()
    const originalName = file.originalname.replace(/\s+/g, '_')
    const sanitizedOriginal = originalName.replace(/[^a-zA-Z0-9._-]/g, '')
    cb(null, `${timestamp}-${sanitizedOriginal}`)
  },
})

export const upload = multer({ storage })
