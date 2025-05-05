"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_1 = require("../../generated/prisma"); // caminho relativo ao arquivo prisma.ts
exports.prisma = new prisma_1.PrismaClient();
