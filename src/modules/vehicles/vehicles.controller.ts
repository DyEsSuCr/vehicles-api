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

  async findAll (req: Request, res: Response, next: NextFunction) {
    try {
      const result = await ModelVehicle.findAll(req)
      responseHandler(res, 200, result)
    } catch (err) {
      next(err)
    }
  }

  async asociateDriverVehicle (_: Request, res: Response, next: NextFunction) {
    try {
      const result = await ModelVehicle.asociateDriverVehicle(4, 5)
      responseHandler(res, 200, result)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  async disassociateDriverVehicle (_: Request, res: Response, next: NextFunction) {
    try {
      const result = await ModelVehicle.disassociateDriverVehicle(1, 1)
      responseHandler(res, 200, result)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

export default new VehicleController()
