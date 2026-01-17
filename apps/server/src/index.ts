import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const app: Express = express()
app.use(express.json)
app.use(cors())

app.get('/activities', activityController.getActivities)
app.get('/logs', logController.getLogs)
app.post('/logs')
app.get('/', (_: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
