import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany
} from 'typeorm'
import { Order } from './order.entity'
import { Vehicle } from './vehicle.entity'

@Entity()
export class Driver extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ length: 20 })
    lastname: string

  @Column({ length: 20 })
    firtname: string

  @Column({ length: 11, unique: true })
    identificador: string

  @Column({ length: 10, unique: true })
    phone: string

  @Column({ length: 50 })
    street: string

  @OneToMany(() => Order, (order) => order.driver)
    order: Order

  @OneToMany(() => Vehicle, (vehicle) => vehicle.driver)
    vehicles: Vehicle
}
