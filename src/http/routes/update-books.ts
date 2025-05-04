import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";


export async function updateBooks(app: FastifyInstance) {
  app.patch('/books/:bookId', async (request, reply) => {
    const getBooksParams = z.object({
      bookId: z.string().uuid(),
    })

    const getBooksBody = z.object({
      isFavorite: z.optional(z.boolean()),
      isRead: z.optional(z.boolean()),
      isFinished: z.optional(z.boolean()),
    })

    const { bookId } = getBooksParams.parse(request.params);
    const { isFavorite, isRead, isFinished } = getBooksBody.parse(request.body);

    const book = await prisma.books.findUnique({
      where: {
        id: bookId,
      }
    })
    if (!book) {
      return reply.status(404).send({ "message": "Book not found" })
    }

    const updatedBook = await prisma.books.update({
      where: {
        id: bookId,
      },
      data: {
        isFavorite: isFavorite !== undefined ? isFavorite : book.isFavorite,
        isRead: isRead !== undefined ? isRead : book.isRead,
        isFinished: isFinished !== undefined ? isFinished : book.isFinished,
      }
    })
    return reply.status(200).send({ book: updatedBook });
  })
}