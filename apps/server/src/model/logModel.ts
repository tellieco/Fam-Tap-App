import prisma from '../../prisma/db'

const logModel = {
  create: async ({
    babyId,
    activityId,
  }: {
    babyId: number
    activityId: number
  }) => {
    const log = await prisma.log.create({ data: { babyId, activityId } })
    console.log(log)
    return log
  },

  getAll: async () => {
    const logs = await prisma.log.findMany()
    console.log(logs)
    return logs
  },

  getLatest: async () => {
    const latestLog = await prisma.log.findFirst({
      orderBy: { timeStamp: 'desc' },
    })
    console.log(latestLog)
    return latestLog
  },

  getToday: async () => {
    const startDate = new Date()
    startDate.setHours(0, 0, 0, 0)
    const endDate = new Date()
    endDate.setHours(23, 59, 59, 999)
    const todayLog = await prisma.log.findMany({
      where: { timeStamp: { gte: startDate, lte: endDate } },
      orderBy: { timeStamp: 'asc' },
    })
    console.log(todayLog)
    return todayLog
  },

  // update: async ({ activityId }: { activityId: number }) => {
  //   const updatedLog = await prisma.log.update({
  //     where: { id },
  //     data: { activityId },
  //   })
  //   console.log(updatedLog)
  //   return updatedlog
  // },

  // delete: async ({ activityId }: { activityId: number }) => {
  //   const deletedLog = await prisma.log.delete({
  //     where: { id: { activityId } },
  //   })
  //   console.log(deletedLog)
  // },
}
export default logModel
