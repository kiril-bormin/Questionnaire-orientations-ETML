// import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TQuestionEtudiants extends BaseModel {
@column({ isPrimary: true, columnName: 'question_etudiant_id' })
  declare id: number

  @column()
  declare question: string 
  
  @column({ columnName: 'reponse_1_text' })
  declare reponse1Text: string
  @column({ columnName: 'reponse_1_poids' })
  declare reponse1Poids: number | null 
  @column({ columnName: 'reponse_1_section' })
  declare reponse1Section: boolean | null 

  @column({ columnName: 'reponse_2_text' })
  declare reponse2Text: string | null
  @column({ columnName: 'reponse_2_poids' })
  declare reponse2Poids: number | null
  @column({ columnName: 'reponse_2_section' })
  declare reponse2Section: boolean | null

  
  @column({ columnName: 'reponse_3_text' })
  declare reponse3Text: string | null
  @column({ columnName: 'reponse_3_poids' })
  declare reponse3Poids: number | null
  @column({ columnName: 'reponse_3_section' })
  declare reponse3Section: boolean | null

  @column({ columnName: 'reponse_4_text' })
  declare reponse4Text: string | null
  @column({ columnName: 'reponse_4_poids' })
  declare reponse4Poids: number | null
  @column({ columnName: 'reponse_4_section' })
  declare reponse4Section: boolean | null
}