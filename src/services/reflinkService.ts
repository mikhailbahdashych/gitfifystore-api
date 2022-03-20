const knex = require('../knex/knex.js')
const uuid = require('uuid')
const tableName = 'reflinks'

export const createReflink = async (userId: string, reflink: string) => {
  const generatedUuid = uuid.v4()

  const reflinkid = await knex('clients')
    .update({ reflinkid: generatedUuid })
    .where('id', userId).returning('reflinkid')

  return knex(tableName).insert({ id: reflinkid[0].reflinkid, reflink })
}

export const getReflinkByInvitorId = async (userId: string) => {
  return knex(tableName)
    .leftJoin('clients', 'clients.reflinkid', `${tableName}.id`)
    .where('clients.id', userId)
    .first(`${tableName}.reflink`, `${tableName}.invitedclients`)
}

export const findReflinkByName = async (reflink: string) => {
  return knex(tableName)
    .first('reflink')
    .where('reflink', reflink)
}

export const getRelinkCreationData = async (reflink: string) => {
  return knex(tableName)
    .leftJoin('clients', 'clients.reflinkid', `${tableName}.id`)
    .where(`${tableName}.reflink`, reflink)
    .first('clients.id', `${tableName}.invitedclients`)
}

export const addClientToReferralProgram = async () => {

}
