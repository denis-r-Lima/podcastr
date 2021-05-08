import mongoose from '../connect'
import bcrypt from 'bcryptjs'

interface PreFunctionThisType extends mongoose.Document {
  name: string
  email: string
  password: string
  createdAt: number
}

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

usersSchema.pre<PreFunctionThisType>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

let Users: mongoose.Model<mongoose.Document<any, {}>, {}>

try {
  Users = mongoose.model('Users')
} catch {
  Users = mongoose.model('Users', usersSchema, 'users')
}

export default Users
