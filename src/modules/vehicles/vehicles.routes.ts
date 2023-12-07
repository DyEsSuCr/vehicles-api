import { Router } from 'express'
import VehicleController from './vehicles.controller'
import { schemaValidator } from '../../middlewares/schema.validator'
import { VehicleSchema } from '../../schemas/vehicle.schema'
import { DriverVehicleSchema } from '../../schemas/driver.vehicle.schema'

export const router = Router()

router.get('/', VehicleController.findAll)
router.post('/', schemaValidator(VehicleSchema), VehicleController.create)
router.post('/modifyAssociation', schemaValidator(DriverVehicleSchema), VehicleController.modifyDriverVehicleAssociation)
