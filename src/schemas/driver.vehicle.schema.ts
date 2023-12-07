import { z } from 'zod'

export const DriverVehicleSchema = z.object({
  body: z.object({
    driverId: z.number({ required_error: 'driverId is required' }),
    vehicleId: z.number({ required_error: 'vehicleId is required' }),
    disassociate: z.boolean({ required_error: 'disassociate is required' })
  })
})
