import mongoose from 'mongoose'
const book = new mongoose.Schema({
    title: {
        type: String,
    },
    authorName: {
        type: String,
    },
    genre: {
        type: String,
    },
    profilepic: {
        type: String,
        required: true,
    },
    pubDate: {
        type: String,
    },
    pubHouse: {
        type: String,
    },
    pubYear: {
        type: String,
    },
    status:{
      type:String,
      default: "planeToRead"
    }
})
const registeringBook = mongoose.model('book', book)
export default registeringBook;