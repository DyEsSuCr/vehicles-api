import { existsSync } from 'node:fs'
import { config } from 'dotenv'

if (existsSync('.env')) {
  config()
}

export const settings = {
  PORT: process.env.PORT ?? 3000,
  DB: {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    URI: process.env.DB_URI
  }
}
