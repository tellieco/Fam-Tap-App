import prisma from '../../prisma/db'

const activityModel = {
  getAll: async () => {
    const activities = await prisma.activity.findMany()
    console.log(activities)
    return activities
  },
  create: async ({ name, icon }: { name: string; icon: string }) => {
    const activity = await prisma.activity.create({ data: { name, icon } })
    return activity
  },
}
export default activityModel
