import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App configuration
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res) =>{
    res.send('Hello World')
})

 

// Start server
app.listen(port,()=>console.log("Starting on port " + port));
