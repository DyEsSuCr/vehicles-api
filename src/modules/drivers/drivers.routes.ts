import { Router } from 'express'
import DriverController from './drivers.controllers'

export const router = Router()

router.get('/', DriverController.findAll)
router.post('/', DriverController.create)
