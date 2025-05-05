"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooks = createBooks;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
async function createBooks(app) {
    app.post('/books', async (request, reply) => {
        const bookSchema = zod_1.z.object({
            title: zod_1.z.string().min(1, { message: 'Title is required' }),
            author: zod_1.z.string().min(1, { message: 'Autor is required' }),
            description: zod_1.z.string()
        });
        const { title, author, description } = bookSchema.parse(request.body);
        const book = await prisma_1.prisma.books.create({
            data: {
                title,
                author,
                description
            },
        });
        return reply.status(201).send({ bookId: book.id });
    });
}
