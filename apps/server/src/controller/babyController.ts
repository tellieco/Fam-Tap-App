import babyModel from '../model/babyModel'
import { Request, Response } from 'express'

const babyController = {
  createBaby: async (req: Request, res: Response) => {
    try {
      const { name } = req.body
      if (!name) {
        return res.status(400).json({ error: 'Name is required' })
      }
      const baby = await babyModel.create({ name })
      res.status(201).json({ baby })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },

  getAllBabies: async (_req: Request, res: Response) => {
    try {
      const babies = await babyModel.getAll()
      res.status(200).json({ babies })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
}
export default babyController
