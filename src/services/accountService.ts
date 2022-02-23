const knex = require('../knex/knex.js')

export const getUserToLogin  = async (email: string, password: string) => {
  return knex('users')
    .first()
    .where('email', email)
    .andWhere('password', password)
}

export const getUserByEmail = async (email: string) => {
  return knex('users')
    .first()
    .where('email', email)
}

export const createUser = async (data: object) => {
  return knex('users')
    .insert(data)
}

export const set2fa = async (data: { secret: string, clientId: string }) => {
  return knex('users')
    .update({two2fa: data.secret})
    .where('id', data.clientId)
}
