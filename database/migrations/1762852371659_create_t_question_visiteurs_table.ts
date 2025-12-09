import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'question_visiteurs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('question_visiteur_id').primary()

      table.text('question').notNullable()
      
      table.text('option_a_text').notNullable()    
      table.string('option_a_section').nullable() 
      table.integer('option_a_poids').defaultTo(1)
  
      table.text('option_b_text').notNullable()
      table.string('option_b_section').nullable()
      table.integer('option_b_poids').defaultTo(1)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}