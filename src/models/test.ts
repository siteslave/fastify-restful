import { Knex } from 'knex'
export class TestModel {

  constructor () { }

  test(db: Knex) {
    return db('users')
  }

}
