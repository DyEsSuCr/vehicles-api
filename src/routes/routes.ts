import { Router } from 'express'
import { router as routerDrivers } from '../modules/drivers/drivers.routes'
import { router as routerVehicles } from '../modules/vehicles/vehicles.routes'

const routes = Router()

routes.use('/api/v1/vehicles', routerVehicles)
routes.use('/api/v1/drivers', routerDrivers)

export { routes }
