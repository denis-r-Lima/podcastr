import mongoose from 'mongoose'

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: 'podcastr'
})


mongoose.Promise = global.Promise

export default mongoose
    