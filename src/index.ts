import express from 'express'
import path from 'path'
import profileRouter from './routes/profile'
import connectDB from './config/db'

const app = express()
const PORT = 3000

// Connect to MongoDB
connectDB()

// Serve uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Routes
app.use('/api/profile', profileRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

//  mongoose
// yarn add @types/mongoose
