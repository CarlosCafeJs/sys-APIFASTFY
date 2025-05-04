import { prisma } from '../lib/prisma'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function getBooks(app: FastifyInstance) {
  app.get('/books', async (request, reply) => {
    const books = await prisma.books.findMany()
    return reply.status(200).send({ books })
  })

  app.get('/books/:bookId', async (request, reply) => {
    const getBooksParams = z.object({
      bookId: z.string().uuid(),
    })

    const { bookId } = getBooksParams.parse(request.params);
    const book = await prisma.books.findUnique({
      where: {
        id: bookId,
      }
    })

    if (!book) {
      return reply.status(404).send({ "message": "Book not found" })
    }
    return reply.status(200).send({ book })
  })
}