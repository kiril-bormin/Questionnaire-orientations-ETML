import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class QuestionVisiteur extends BaseModel {
  @column({ isPrimary: true, columnName: 'question_visiteur_id' })
  declare id: number

  @column()
  declare question: string 

  @column()
  declare optionAText: string

  @column()
  declare optionASection: string | null
  
  @column()
  declare optionAPoids: number

  @column()
  declare optionBText: string

  @column()
  declare optionBSection: string | null 

  @column()
  declare optionBPoids: number

  // @column.dateTime({ autoCreate: true })
  // declare createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // declare updatedAt: DateTime
}