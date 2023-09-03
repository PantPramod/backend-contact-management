import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    status:String
})

const contactModal = mongoose.model('contact', contactSchema)

export default contactModal