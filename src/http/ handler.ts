import app from './server'; // Importa o Fastify configurado

export default async function handler(req: any, res: any) {
  await app.ready(); // Garante que o Fastify esteja pronto
  app.server.emit('request', req, res); // Emite a requisição para o Fastify
}
