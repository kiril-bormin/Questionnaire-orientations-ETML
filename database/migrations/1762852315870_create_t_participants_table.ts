import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'participants'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary() 
      
      table.string('name', 100).notNullable()
      
      table.boolean('questionnaire_type').nullable() 
      
      table.string('resultat_text', 70).nullable()
      
      table.integer('score_dev').defaultTo(0)
      table.integer('score_infra').defaultTo(0)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}