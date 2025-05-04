import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma'

export async function createBooks(app: FastifyInstance) {
  app.post('/books', async (request, reply) => {
    const bookSchema = z.object({
      title: z.string().min(1, { message: 'Title is required' }),
      author: z.string().min(1, { message: 'Autor is required' }),
      description: z.string()
    })
    const { title, author, description } = bookSchema.parse(request.body);

    const book = await prisma.books.create({
      data: {
        title,
        author,
        description
      },
    })
    return reply.status(201).send({ bookId: book.id })
  })
}