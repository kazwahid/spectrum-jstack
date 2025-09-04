import { z } from "zod"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"
import { j, publicProcedure } from "../jstack"
import { users } from "../db/schema"

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(1, "Name is required"),
})

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export const authRouter = j.router({
  signUp: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx, c }) => {
      const { db } = ctx
      try {
        // Check if user already exists
        const existingUser = await db.select().from(users).where(eq(users.email, input.email)).limit(1)

        if (existingUser.length > 0) {
          throw new Error("User with this email already exists")
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(input.password, 12)

        // Create user
        const newUserResult = await db.insert(users).values({
          email: input.email,
          name: input.name,
          password: hashedPassword,
        }).returning()

        const newUser = newUserResult[0]
        if (!newUser) {
          throw new Error("Failed to create user")
        }

        return c.superjson({
          success: true,
          user: {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
          }
        })
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to create account")
      }
    }),

  signIn: publicProcedure
    .input(signInSchema)
    .mutation(async ({ input, ctx, c }) => {
      const { db } = ctx
      try {
        // Find user
        const userResult = await db.select().from(users).where(eq(users.email, input.email)).limit(1)
        const user = userResult[0]

        if (!user || !user.password) {
          throw new Error("Invalid email or password")
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(input.password, user.password)

        if (!isPasswordValid) {
          throw new Error("Invalid email or password")
        }

        return c.superjson({
          success: true,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
          }
        })
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to sign in")
      }
    }),

  checkEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input, ctx, c }) => {
      const { db } = ctx
      const userResult = await db.select().from(users).where(eq(users.email, input.email)).limit(1)
      const user = userResult[0]

      return c.superjson({
        exists: !!user
      })
    }),
})


