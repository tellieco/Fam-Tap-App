import prisma from '../../prisma/db'

const babyModel = {
  create: async ({ name }: { name: string }) => {
    const baby = await prisma.baby.create({ data: { name } })
    return baby
  },

  getAll: async () => {
    const babies = await prisma.baby.findMany()
    console.log(babies)
    return babies
  },
}

export default babyModel
