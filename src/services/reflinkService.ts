const knex = require('../knex/knex.js')
const tableName = 'reflinks'

export const createReflink = async (id: string, reflink: string) => {
  return knex(tableName)
    .insert({
      
    })
}
