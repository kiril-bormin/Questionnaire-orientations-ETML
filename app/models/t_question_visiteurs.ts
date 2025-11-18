// import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TQuestionVisiteurs extends BaseModel {
@column({ isPrimary: true, columnName: 'question_visiteur_id' })
  declare id: number

  @column()
  declare question: string 

  @column({ columnName: 'option_a_text' })
  declare optionAText: string

  @column({ columnName: 'option_a_section' })
  declare optionASection: boolean | null

  @column({ columnName: 'option_b_text' })
  declare optionBText: string

  @column({ columnName: 'option_b_section' })
  declare optionBSection: boolean | null 
}