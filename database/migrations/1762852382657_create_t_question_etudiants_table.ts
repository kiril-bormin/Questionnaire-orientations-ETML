import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'question_etudiants'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('question_etudiant_id').primary()
      
      table.text('question').notNullable()
      
      table.text('reponse_1_text').notNullable()
      table.smallint('reponse_1_poids').nullable()
      table.string('reponse_1_section').nullable()
      
      table.text('reponse_2_text').nullable()
      table.smallint('reponse_2_poids').nullable()
      table.string('reponse_2_section').nullable()
      
      table.text('reponse_3_text').nullable()
      table.smallint('reponse_3_poids').nullable()
      table.string('reponse_3_section').nullable()
      
      table.text('reponse_4_text').nullable()
      table.smallint('reponse_4_poids').nullable()
      table.string('reponse_4_section').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}