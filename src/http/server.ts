import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Hello world";
})


app.listen({ port: 8080 }, () => {
  console.log("O servidor esta rodando na porta 8080")
})