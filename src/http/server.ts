import fastify from "fastify";
import { createBooks } from "./routes/create-books";
import { getBooks } from "./routes/get-books";
import { updateBooks } from "./routes/update-books";

const app = fastify();

app.register(createBooks)
app.register(getBooks)
app.register(updateBooks)


app.listen({ port: 8080 }, () => {
  console.log("O servidor esta rodando na porta 8080")
})