require('dotenv').config()
const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
const authRouter=require('./routes/auth')
const userRouter=require('./routes/user')
const port=process.env.PORT || 5000


connectDB()
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

app.listen(port,()=>console.log(`server running on port ${port}`))