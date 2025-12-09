import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class QuestionEtudiant extends BaseModel {
  @column({ isPrimary: true, columnName: 'question_etudiant_id'  })
  declare id: number

  @column()
  declare question: string 
  
  @column()
  declare reponse1Text: string
  @column()
  declare reponse1Poids: number | null 
  @column()
  declare reponse1Section: string | null 

  @column()
  declare reponse2Text: string | null
  @column()
  declare reponse2Poids: number | null
  @column()
  declare reponse2Section: string | null

  
  @column()
  declare reponse3Text: string | null
  @column()
  declare reponse3Poids: number | null
  @column()
  declare reponse3Section: string | null

  @column()
  declare reponse4Text: string | null
  @column()
  declare reponse4Poids: number | null
  @column()
  declare reponse4Section: string | null

  // @column.dateTime({ autoCreate: true })
  // declare createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // declare updatedAt: DateTime
}