import type { NextFunction, Request, Response } from 'express'

import { responseHandler } from '../../utils/response.handler'
import ModelVehicle from './vehicles.services'

export class VehicleController {
  async create ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const result = await ModelVehicle.create({ ...body })
      responseHandler(res, 201, result)
    } catch (err) {
      next(err)
    }
  }

  async findAll (_: Request, res: Response, next: NextFunction) {
    try {
      const result = await ModelVehicle.findAll()
      responseHandler(res, 200, result)
    } catch (err) {
      next(err)
    }
  }
}

export default new VehicleController()
