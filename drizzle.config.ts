import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts", // adjust if needed
  out: "./drizzle",
  dialect: "postgresql", // ✅ REQUIRED
  dbCredentials: {
    url: process.env.DATABASE_URL!, // your Supabase URL
  },
});
