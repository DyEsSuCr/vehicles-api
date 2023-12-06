import { HTTPError } from '../../middlewares/errror.handler'
import { Driver } from '../../entities/driver.entity'

class ModelDriver {
  async create ({ document, firtname, lastname, phone, street }: Driver): Promise<Driver> {
    const driverExists = await Driver.find({
      where: {
        document
      }
    })

    if (driverExists.length > 0) {
      throw new HTTPError(400, 'Driver already exists')
    }

    const driver = new Driver()
    driver.firtname = firtname
    driver.lastname = lastname
    driver.document = document
    driver.phone = phone
    driver.street = street

    await driver.save()

    return driver
  }

  async findAll (): Promise<Driver[]> {
    const drivers = await Driver.find()

    return drivers
  }
}

export default new ModelDriver()
