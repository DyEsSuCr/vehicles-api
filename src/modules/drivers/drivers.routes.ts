import { Router } from 'express'
import DriverController from './drivers.controllers'
import { schemaValidator } from '../../middlewares/schema.validator'
import { DriverSchema } from '../../schemas/driver.shema'

export const router = Router()

router.get('/', DriverController.findAll)
router.post('/', schemaValidator(DriverSchema), DriverController.create)
