import prisma from '../../prisma/db'

const babyModel = {
  getAll: async () => {
    const babies = await prisma.baby.findMany()
    console.log(babies)
    return babies
  },
  create: async ({ name }: { name: string }) => {
    const baby = await prisma.baby.create({ data: { name } })
    return baby
  },
}

export default babyModel
