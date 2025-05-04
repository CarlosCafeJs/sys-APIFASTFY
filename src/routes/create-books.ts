import { FastifyInstance } from 'fastify';
import { z } from 'zod';


export async function createBooks(app: FastifyInstance) {
  app.post('/books', async (request, reply) => {

  })
}