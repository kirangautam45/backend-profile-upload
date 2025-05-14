import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/profile-upload', {
      // optional config
    })
    console.log('MongoDB connected ✅')
  } catch (error) {
    console.error('MongoDB connection failed ❌', error)
    process.exit(1)
  }
}

export default connectDB
