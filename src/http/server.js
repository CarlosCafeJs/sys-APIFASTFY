"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const create_books_1 = require("./routes/create-books");
const get_books_1 = require("./routes/get-books");
const update_books_1 = require("./routes/update-books");
const delete_books_1 = require("./routes/delete-books");
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)();
app.register(cors_1.default, { origin: true });
app.register(create_books_1.createBooks);
app.register(get_books_1.getBooks);
app.register(update_books_1.updateBooks);
app.register(delete_books_1.deleteBooks);
exports.default = app;
// app.listen({ port: 8080 }, (err, address) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   }
//   console.log(`🚀 Server is running at ${address}`)
// })
