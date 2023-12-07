import type { NextFunction, Request, Response } from 'express'

import { responseHandler } from '../utils/response.handler'
import { MESSAGES_ERRORS } from '../config/const'

export class HTTPError extends Error {
  statusCode: number
  message: string

  constructor (statusCode: number, message: string) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

export const handleErrorMiddleware = (error: HTTPError, _req: Request, res: Response, _next: NextFunction): void => {
  if (error instanceof HTTPError) {
    const { statusCode, message } = error
    responseHandler(res, statusCode, { statusCode, message })
  } else {
    console.log('Serve err ', error)
    responseHandler(res, 500, { statusCode: 500, message: MESSAGES_ERRORS.INTERNAL_SERVER_ERROR })
  }
}

export const handleError404 = (_req: Request, res: Response): void => {
  responseHandler(res, 404, { statusCode: 404, message: MESSAGES_ERRORS.NOT_FOUND })
}
