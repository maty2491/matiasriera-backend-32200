import dotenv from "dotenv"

dotenv.config()
console.log(process.env.DATABASE_URL, process.env.DATABASE);

export const config = {
  dbUrl: process.env.DATABASE_URL,
  database: process.env.DATABASE,
}