import activityModel from '../model/activityModel'
import { Request, Response } from 'express'

const activityController = {
  getActivities: async (_req: Request, res: Response) => {
    try {
      const activities = await activityModel.getAll()
      res.status(200).json({ activities })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
  createActivity: async (req: Request, res: Response) => {
    try {
      const { name, icon } = req.body
      if (!name || !icon) {
        return res.status(400).json({ error: 'Name and icon are required' })
      }
      const activity = await activityModel.create({ name, icon })
      res.status(201).json({ activity })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
}
export default activityController
