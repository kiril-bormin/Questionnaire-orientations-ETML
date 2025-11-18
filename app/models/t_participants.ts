// import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TParticipants extends BaseModel {
@column({ isPrimary: true, columnName: 'participant_id' })
  declare id: number

  @column({ columnName: 'name' })
  declare prenom: string

  @column({ columnName: 'questionnaire_type' })
  declare questionnaireType: boolean | null

  @column({ columnName: 'resultat_text' })
  declare resultatText: string | null

  @column()
  declare score: number | null
}