import { DataSource } from 'typeorm'
import { settings } from '../../config/settings'

import { Driver } from '../../entities/driver.entity'
import { Order } from '../../entities/order.entity'
import { Vehicle } from '../../entities/vehicle.entity'

const { DB } = settings

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB.HOST,
  port: Number(DB.PORT),
  username: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
  synchronize: true,
  logging: true,
  entities: [Driver, Order, Vehicle]
})
