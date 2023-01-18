import { prisma } from './lib/prisma'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
export async function appRoutes(app: FastifyInstance) {
  const createHabitBody = z.object({
    title: z.string(),
    weekDays: z.array(z.number().min(0).max(6))
  })

  app.post('/habits', async request => {
    const { title, weekDays } = createHabitBody.parse(request.body)
  })
}
