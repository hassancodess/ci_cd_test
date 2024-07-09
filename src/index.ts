import express, { Application, Request, Response } from 'express'
import CONFIG from './config'
import dotenv from 'dotenv'
dotenv.config()
import './env'

const app: Application = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World!',
  })
})

const PORT = CONFIG.port

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`)
  })
} catch (error: any) {
  console.error(`Error occured: ${error.message}`)
}
