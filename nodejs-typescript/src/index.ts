import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { spawn, exec } from 'child_process'
// import { uploadFileCodeController } from './code.controllers'
// import { WrapRequestHandler } from './utils/handler'
import path from 'path'
import { classifierController } from './controllers'
import { WrapRequestHandler } from './utils'
config()

const app = express()

const PORT = process.env.PORT || 4000
app.use(express.static(path.join(__dirname, 'public')))

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST']
  })
)
app.use(express.json())
app.get('/hello', (req, res) => {
  return res.json({
    message: 'Hello'
  })
})

app.post('/classify', WrapRequestHandler(classifierController))

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})
