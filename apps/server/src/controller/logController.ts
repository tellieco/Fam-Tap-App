import logModel from '../model/logModel'
import { Request, Response } from 'express'

const logController = {
  getAllLogs: async (_req: Request, res: Response) => {
    try {
      const logs = await logModel.getAll()
      res.status(200).json({ logs })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
  createLog: async (req: Request, res: Response) => {
    try {
      const { babyId, activityId } = req.body
      if (!babyId || !activityId) {
        return res
          .status(400)
          .json({ error: 'Babyid and Activityid are required' })
      }
      const log = await logModel.create({ babyId, activityId })
      res.status(201).json({ log })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
  //   getTodayLog: async (req, res) => {
  //     const logs = await logModel.getToday()
  //     res.json({ logs })
  //   },
  //   getLatestLog: async (req, res) => {
  //     const logs = await logModel.getLatest()
  //     res.json({ logs })
  //   },
  //
  //   updateLog: async (req, res) => {
  //     const logs = await logModel.update()
  //     res.json({ logs })
  //   },

  //   deleteLog: async (req, res) => {
  //     const logs = await logModel.delete()
  //     res.json({ logs })
  //   },
}
export default logController
