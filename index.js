const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const router = require('./router/router')
const app = express()
const port = 2000


mongoose.connect('mongodb+srv://yd00102:olVOWnkoMOAaBelC@cluster0.qy14jfo.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('mongoDB contected'))
.catch((err) => console.log(err))

/**they are same midiealwear */

app.use(express.json())
app.use(cors())


/**they are same api routes */

app.use('/api' , router)

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`)
})