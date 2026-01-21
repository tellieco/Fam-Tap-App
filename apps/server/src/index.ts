import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import activityController from './controller/activityController'
import logController from './controller/logController'
import babyController from './controller/babyController'
dotenv.config()

const PORT = process.env.PORT
const app: Express = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.post('/babies', babyController.createBaby)
app.get('/babies', babyController.getAllBabies)
app.post('/activities', activityController.createActivity)
app.get('/activities', activityController.getAllActivities)
app.post('/logs', logController.createLog)
app.get('/logs', logController.getAllLogs)
app.get('/logs/latest', logController.getLatestLogs)
app.get('/logs/today', logController.getTodayLogs)
app.patch('/logs/:id', logController.updateLog)
app.delete('/logs/:id', logController.deleteLog)

app.get('/', (_: Request, res: Response) => {
  res.send('Hello, this server is working fine!')
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
