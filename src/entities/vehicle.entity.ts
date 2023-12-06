import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm'

import { Driver } from './driver.entity'

@Entity()
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ length: 4 })
    model: string

  @Column({ length: 7, unique: true })
    plate: string

  @Column({ length: 7 })
    capacity: string

  @ManyToOne(() => Driver, (driver) => driver.vehicles, { nullable: true })
    driver: Driver | null
}
