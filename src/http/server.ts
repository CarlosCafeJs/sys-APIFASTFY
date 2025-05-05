import fastify from "fastify";
import { createBooks } from "./routes/create-books";
import { getBooks } from "./routes/get-books";
import { updateBooks } from "./routes/update-books";
import { deleteBooks } from "./routes/delete-books";

const app = fastify();

app.register(createBooks)
app.register(getBooks)
app.register(updateBooks)
app.register(deleteBooks)


app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`🚀 Server is running at ${address}`)
})
