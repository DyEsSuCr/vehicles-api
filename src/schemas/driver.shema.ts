import { z } from 'zod'

export const DriverSchema = z.object({
  body: z.object({
    firtname: z.string({ required_error: 'firtname is required' }),
    lastname: z.string(),
    document: z.string({ required_error: 'document is required' }).min(11, { message: 'document must be at least 11 characters' }).max(11, { message: 'document must be at most 11 characters' }),
    phone: z.string({ required_error: 'phone is required' }).min(10, { message: 'phone must be at least 10 characters' }).max(10, { message: 'phone must be at most 10 characters' }),
    street: z.string()
  })
})
