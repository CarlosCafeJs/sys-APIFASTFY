"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_1 = require("../../../dist/generated/prisma"); // Caminho ajustado para o local correto
// caminho relativo ao arquivo prisma.ts
exports.prisma = new prisma_1.PrismaClient();
