import { z } from 'zod'

export const VehicleSchema = z.object({
  body: z.object({
    capacity: z.string({ required_error: 'capacity is required' }).min(4, { message: 'capacity must be at least 4 characters' }),
    model: z.string({ required_error: 'model is required' }).min(4, { message: 'model must be at least 4 characters' }),
    plate: z.string({ required_error: 'plate is required' }).min(7, { message: 'plate must be at least 7 characters' }).max(7, { message: 'plate must be at most 7 characters' })
  })
})
