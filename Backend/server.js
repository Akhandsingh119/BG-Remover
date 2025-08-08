import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './Routes/userRoutes.js'
import imageRouter from './Routes/imagerout.js'
// App Config
const PORT = process.env.PORT || 4000
const app = express()

await connectDB()  

// Initialize Middlewares
app.use(express.json())
app.use(cors())

// API routes
app.get('/', (req, res) => res.send("API Working"))

app.use('/api/user',userRouter)

app.use('/api/image',imageRouter)


app.listen(PORT, () => console.log("Server Running on port " + PORT)) 
 