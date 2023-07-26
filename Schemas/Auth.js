import mongoose from 'mongoose'

const reg = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
})

const registeringUser = mongoose.model('user', reg)
export default registeringUser;