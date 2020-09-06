import * as knex from 'knex';

export class UserModel {

  constructor() { }

  create(db: knex, data: any) {
    return db('users').insert(data)
  }

}
