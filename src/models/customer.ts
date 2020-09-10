import * as knex from 'knex';

export class CustomerModel {

  constructor () { }

  list(db: knex) {
    return db('customers')
  }

}
