"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = getBooks;
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
async function getBooks(app) {
    app.get('/books', async (request, reply) => {
        const books = await prisma_1.prisma.books.findMany();
        return reply.status(200).send({ books });
    });
    app.get('/books/:bookId', async (request, reply) => {
        const getBooksParams = zod_1.z.object({
            bookId: zod_1.z.string().uuid(),
        });
        const { bookId } = getBooksParams.parse(request.params);
        const book = await prisma_1.prisma.books.findUnique({
            where: {
                id: bookId,
            }
        });
        if (!book) {
            return reply.status(404).send({ "message": "Book not found" });
        }
        return reply.status(200).send({ book });
    });
}
