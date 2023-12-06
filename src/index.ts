import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { Server } from 'node:http'

import { settings } from './config/settings'
import { handleErrorMiddleware, handleError404 } from './middlewares/errror.handler'
import { routes } from './routes/routes'
import { AppDataSource } from './database/postgres/datasources'

export class App {
  private readonly app: express.Application
  private readonly port: number

  constructor () {
    this.app = express()
    this.port = Number(settings.PORT)
    this.middlewares()
    this.routes()
  }

  start (): Server {
    return this.app.listen(this.port, () => {
      AppDataSource.initialize()
        .then(() => {
          console.log('Database conection is online...')
          console.log(`🆗✅🆗 Server on port http://localhost:${this.port} 🆗✅🆗`)
        })
        .catch(console.log)
    })
  }

  routes (): void {
    this.app.use(routes)
    this.app.use(handleErrorMiddleware)
    this.app.use(handleError404)
  }

  middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors({ origin: '*' }))
    this.app.disable('x-powered-by')
    this.app.use(morgan('[:date[iso]] (:status) ":method :url HTTP/:http-version" :response-time ms - [:res[content-length]]'))
  }
}

const app = new App()
app.start()
