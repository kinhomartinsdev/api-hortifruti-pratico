
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cidade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column ()
  public nome: string;

  @column ()
  public estado_id: string;

  @column ()
  public ativo: boolean;

  
}
