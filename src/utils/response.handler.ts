import { type Response } from 'express'

export const responseHandler = (res: Response, status: number, data: unknown) => res.status(status).json(data)
