const knex = require('../knex/knex.js')
const uuid = require('uuid')
const tableName = 'reflinks'

export const createReflink = async (userId: string, reflink: string) => {
  const generatedUuid = uuid.v4()

  const reflinkid = await knex('users')
    .update({ reflinkid: generatedUuid })
    .where('id', userId).returning('reflinkid')

  return knex(tableName).insert({ id: reflinkid[0].reflinkid, reflink })
}
