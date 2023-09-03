import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import contact from './modal/contact.js'

mongoose.connect("mongodb+srv://pramod:xWbHt4akxdDOi3aE@cluster0.xbotdbg.mongodb.net/contact")
    .then(() => console.log("Connected To Database"))
    .catch((err) => console.log(err))

const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())



app.get('/api/contact', async (req, res) => {
    try {
        const allConacts = await contact.find({})
        res.send(allConacts)
    } catch (err) {
        console.log(err)
    }
})

app.get('/api/contact/:id', async (req, res) => {
    try {
        const detailedContact =await contact.findById(req.params.id);
        res.send(detailedContact)
    } catch (err) {
        console.log(err)
    }
})

app.post('/api/contact', async (req, res) => {
    try {
        const newContact = await contact.create(req.body)
        res.send(newContact)
    } catch (err) {
        console.log(err)
    }
})



app.delete('/api/contact/:id', async (req, res) => {
    try {
        await contact.findByIdAndDelete(req.params.id);
        res.send("deleted")
    } catch (err) {
        console.log(err)
    }
}
)
app.patch('/api/contact/:id', async (req, res) => {

    try {
        const updatedContact = await contact.findByIdAndUpdate(req.params.id, req.body)
        res.send(updatedContact)
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`App listening at PORT: ${PORT}`)) 