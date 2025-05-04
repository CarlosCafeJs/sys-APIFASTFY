import fastify from "fastify";
import { createBooks } from "./routes/create-books";

const app = fastify();

app.register(createBooks)

app.listen({ port: 8080 }, () => {
  console.log("O servidor esta rodando na porta 8080")
})