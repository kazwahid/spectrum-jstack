import appRouter from "@/server"
import { handle } from "hono/vercel"

// This route catches all incoming API requests and lets your appRouter handle them.
export const GET = handle(appRouter)
export const POST = handle(appRouter)
export const PUT = handle(appRouter)
export const DELETE = handle(appRouter)
export const PATCH = handle(appRouter)
