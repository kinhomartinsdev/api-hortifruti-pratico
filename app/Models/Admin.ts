import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Admin extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public user_id: number;

  @column()
  public nome: string;


  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
