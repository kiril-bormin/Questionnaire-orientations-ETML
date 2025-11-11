import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_participants'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('participant_id').primary() 
      
      table.string('name', 100).notNullable()
      
      table.boolean('questionnaire_type').nullable() 
      
      table.string('resultat_text', 70).nullable()
      
      table.integer('score').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}