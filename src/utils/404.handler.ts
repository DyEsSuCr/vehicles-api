import { responseHandler } from './response.handler'
import type { Request, Response } from 'express'
import { MESSAGES_ERRORS } from '../config/const'

export const handle404 = (_req: Request, res: Response): void => {
  responseHandler(res, 404, { statusCode: 404, message: MESSAGES_ERRORS.NOT_FOUND })
}
