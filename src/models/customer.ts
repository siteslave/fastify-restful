import { Knex } from 'knex'

export class CustomerModel {

  constructor () { }

  list(db: Knex) {
    return db('customers')
  }

}
