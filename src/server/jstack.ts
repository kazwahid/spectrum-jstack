import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { env } from "hono/adapter"
import { jstack } from "jstack"

interface Env {
  Bindings: { DATABASE_URL: string }
}

export const j = jstack.init<Env>()

/**
 * Type-safely injects database into all procedures
 * 
 * @see https://jstack.app/docs/backend/middleware
 */
const databaseMiddleware = j.middleware(async ({ c, next }) => {
  // Try to get DATABASE_URL from environment variables
  const DATABASE_URL = process.env.DATABASE_URL || env(c).DATABASE_URL

  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  const sql = neon(DATABASE_URL)
  const db = drizzle(sql)

  return await next({ db })
})

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const publicProcedure = j.procedure.use(databaseMiddleware)
