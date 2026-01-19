import prisma from '../../prisma/db'

const logModel = {
  getAll: async () => {
    const logs = await prisma.log.findMany()
    console.log(logs)
    return logs
  },
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
  //   getToday: async () => {
  //     const log = await prisma.log.findUnique() /logs?date=today&order=asc
  //     where:{}
  //     console.log(log)
  //     return log
  //   },
  //   getLatest: async () => {
  //     const log = await prisma.log.findFirst() /logs?sort_by=timestamp&order=desc&limit=1
  //     console.log(log)
  //     return log
  //   },
  //
  //   update: async (id, data) => {
  //     const log = await prisma.log.update({where:{id},data})
  //     console.log(log)
  //     return log
  //   },
  //   delete: async (id) => {
  //     const log = await prisma.log.delete({where:{id}})
  //     console.log(log)
  //     return log
  //   },
}
export default logModel
