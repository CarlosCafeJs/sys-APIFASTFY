import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma'

export async function deleteBooks(app: FastifyInstance) {
  app.delete('/books/:bookId', async (request, reply) => {
    const deleteBooksParams = z.object({
      bookId: z.string().uuid(),
    })
    const { bookId } = deleteBooksParams.parse(request.params);

    const book = await prisma.books.findUnique({
      where: {
        id: bookId,
      },
    })
    if (!book) {
      return reply.status(404).send({ message: "Livro Não Encontrado" })
    }

    const deleteBook = await prisma.books.delete({
      where: {
        id: bookId,
      }
    })
    return reply.status(200).send({ book: deleteBook });
  })
}