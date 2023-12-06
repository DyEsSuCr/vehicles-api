import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm'
import { Driver } from './driver.entity'

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ length: 20 })
    type_oder: string

  @Column({ length: 50 })
    street: string

  @ManyToOne(() => Driver, (driver) => driver.vehicles)
    driver: Driver[]
}
