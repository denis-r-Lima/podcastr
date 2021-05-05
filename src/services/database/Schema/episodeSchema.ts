import mongoose from '../connect'

const episodeSchema = new mongoose.Schema({
    slug:{
        type: String,
        required: true,
    },      
    title: {
        type: String,
        required: true,
    },
    members: {
        type: String,
        required: true,
    },
    published_at: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    file: {
        url:{
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        }
    }
})

let Episodes: mongoose.Model<mongoose.Document<any, {}>, {}>

try{
    Episodes = mongoose.model('Episodes')
}catch{
    Episodes = mongoose.model('Episodes', episodeSchema, 'episodes')
}


export default Episodes