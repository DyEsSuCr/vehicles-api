import { HTTPError } from '../../middlewares/errror.handler'
import { Vehicle } from '../../entities/vehicle.entity'

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

  async findAll (): Promise<Vehicle[]> {
    const drivers = await Vehicle.find()

    return drivers
  }
}

export default new ModelVehicle()
