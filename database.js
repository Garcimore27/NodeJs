const mongoose = require('mongoose')

const login = encodeURIComponent("agarnij")
const password = encodeURIComponent("c1veX3ICJjIOxVfa")

const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://${login}:${password}@cluster0.inbmool.mongodb.net/prepavenir?retryWrites=true&w=majority`)
}

module.exports = { connectDB }