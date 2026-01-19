import prisma from '../../prisma/db'

const activityModel = {
  create: async ({ name, icon }: { name: string; icon: string }) => {
    const activity = await prisma.activity.create({ data: { name, icon } })
    return activity
  },

  getAll: async () => {
    const activities = await prisma.activity.findMany()
    console.log(activities)
    return activities
  },
}
export default activityModel
