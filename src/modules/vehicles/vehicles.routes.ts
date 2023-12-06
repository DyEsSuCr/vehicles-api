import { Router } from 'express'
import VehicleController from './vehicles.controller'

export const router = Router()

router.get('/', VehicleController.findAll)
router.post('/', VehicleController.create)
