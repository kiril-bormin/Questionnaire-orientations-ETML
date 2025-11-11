import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_question_visiteurs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('question_visiteur_id').primary()

      table.text('question').notNullable()
      
      table.text('option_a_text').notNullable()
      
      table.boolean('option_a_section').nullable()
      
      table.text('option_b_text').notNullable()
      
      table.boolean('option_b_section').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}