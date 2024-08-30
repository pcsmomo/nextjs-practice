import { PrismaClient } from "@prisma/client";

// Declare a global variable that will be used to share the PrismaClient instance for hot-reloading
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
