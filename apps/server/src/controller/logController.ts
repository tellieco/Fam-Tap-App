import logModel from '../model/logModel'
import { Request, Response } from 'express'

const logController = {
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

  getAllLogs: async (_req: Request, res: Response) => {
    try {
      const logs = await logModel.getAll()
      if (!logs) {
        return res.status(404).json({ error: 'Logs not found' })
      }
      res.status(200).json({ logs })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },

  getLatestLogs: async (_req: Request, res: Response) => {
    try {
      const logs = await logModel.getLatest()
      if (!logs) {
        return res.status(404).json({ error: 'Log not found' })
      }
      res.status(200).json({ logs })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },

  getTodayLogs: async (_req: Request, res: Response) => {
    try {
      const logs = await logModel.getToday()
      if (!logs) {
        return res.status(404).json({ error: 'Log not found' })
      }
      res.status(200).json({ logs })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },

  updateLog: async (req: Request, res: Response) => {
    try {
      const logId = Number(req.params.id)
      const activityId = req.body.activityId
      if (!logId || !activityId) {
        return res
          .status(400)
          .json({ error: 'Logid and Activityid are required.' })
      }
      const log = await logModel.update({ logId, activityId })
      res.status(200).json({ log })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' })
    }
  },

  deleteLog: async (req: Request, res: Response) => {
    try {
      const logId = Number(req.params.id)
      if (!logId) {
        return res.status(400).json({ error: 'Logid is required.' })
      }
      const log = await logModel.delete({ logId })
      res.status(200).json({ log })
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' })
    }
  },
}
export default logController
