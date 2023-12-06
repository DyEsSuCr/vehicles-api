import type { NextFunction, Request, Response } from 'express'

import { responseHandler } from '../../utils/response.handler'
import ModelDriver from './driver.services'

export class DriverController {
  async create ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const result = await ModelDriver.create({ ...body })
      responseHandler(res, 201, result)
    } catch (err) {
      next(err)
    }
  }

  async findAll (_: Request, res: Response, next: NextFunction) {
    try {
      const result = await ModelDriver.findAll()
      responseHandler(res, 200, result)
    } catch (err) {
      next(err)
    }
  }
}

export default new DriverController()
