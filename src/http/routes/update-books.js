"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBooks = updateBooks;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
async function updateBooks(app) {
    app.patch('/books/:bookId', async (request, reply) => {
        const getBooksParams = zod_1.z.object({
            bookId: zod_1.z.string().uuid(),
        });
        const getBooksBody = zod_1.z.object({
            isFavorite: zod_1.z.optional(zod_1.z.boolean()),
            isRead: zod_1.z.optional(zod_1.z.boolean()),
            isFinished: zod_1.z.optional(zod_1.z.boolean()),
        });
        const { bookId } = getBooksParams.parse(request.params);
        const { isFavorite, isRead, isFinished } = getBooksBody.parse(request.body);
        const book = await prisma_1.prisma.books.findUnique({
            where: {
                id: bookId,
            }
        });
        if (!book) {
            return reply.status(404).send({ "message": "Book not found" });
        }
        const updatedBook = await prisma_1.prisma.books.update({
            where: {
                id: bookId,
            },
            data: {
                isFavorite: isFavorite !== undefined ? isFavorite : book.isFavorite,
                isRead: isRead !== undefined ? isRead : book.isRead,
                isFinished: isFinished !== undefined ? isFinished : book.isFinished,
            }
        });
        return reply.status(200).send({ book: updatedBook });
    });
}
