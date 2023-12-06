import { IsNull, Not } from 'typeorm'
import { Request } from 'express'
import { HTTPError } from '../../middlewares/errror.handler'
import { Vehicle } from '../../entities/vehicle.entity'
import { Driver } from '../../entities/driver.entity'

class ModelVehicle {
  async create ({ capacity, model, plate }: Vehicle): Promise<Vehicle> {
    const vehicleExists = await Vehicle.find({
      where: {
        plate
      }
    })

    if (vehicleExists.length > 0) {
      throw new HTTPError(400, 'Vehicle already exists')
    }

    const driver = new Vehicle()
    driver.capacity = capacity
    driver.model = model
    driver.plate = plate

    await driver.save()

    return driver
  }

  async findAll ({ query }: Request): Promise<Vehicle[]> {
    const { associate } = query

    if (associate === 'true') {
      return await Vehicle.find({ where: { driver: Not(IsNull()) }, relations: ['driver'] })
    } else if (associate === 'false') {
      return await Vehicle.find({ where: { driver: IsNull() }, relations: ['driver'] })
    }

    return await Vehicle.find({ relations: ['driver'] })
  }

  async asociateDriverVehicle (vehicleId: number, driverId: number): Promise<Vehicle> {
    const driver = await Driver.findOne({ where: { id: driverId } })
    const vehicle = await Vehicle.findOne({ where: { id: vehicleId }, relations: ['driver'] })

    if (driver === null) throw new HTTPError(400, 'Driver  not found')
    if (vehicle === null) throw new HTTPError(400, 'vehicle not found')

    vehicle.driver = driver

    await vehicle.save()

    return vehicle
  }

  async disassociateDriverVehicle (vehicleId: number, driverId: number): Promise<Vehicle> {
    const driver = await Driver.findOne({ where: { id: driverId } })
    const vehicle = await Vehicle.findOne({ where: { id: vehicleId }, relations: ['driver'] })

    if (driver === null) throw new HTTPError(400, 'Driver  not found')
    if (vehicle === null) throw new HTTPError(400, 'vehicle not found')

    vehicle.driver = null

    await vehicle.save()

    return vehicle
  }
}

export default new ModelVehicle()
