import mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  user:process.env.DB_USER,
  pass:process.env.DB_PASSWORD,
})


mongoose.Promise = global.Promise

export default mongoose
    