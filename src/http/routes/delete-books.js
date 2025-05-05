"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooks = deleteBooks;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
async function deleteBooks(app) {
    app.delete('/books/:bookId', async (request, reply) => {
        const deleteBooksParams = zod_1.z.object({
            bookId: zod_1.z.string().uuid(),
        });
        const { bookId } = deleteBooksParams.parse(request.params);
        const book = await prisma_1.prisma.books.findUnique({
            where: {
                id: bookId,
            },
        });
        if (!book) {
            return reply.status(404).send({ message: "Livro Não Encontrado" });
        }
        const deleteBook = await prisma_1.prisma.books.delete({
            where: {
                id: bookId,
            }
        });
        return reply.status(200).send({ book: deleteBook });
    });
}
