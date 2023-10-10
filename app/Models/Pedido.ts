import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente';
import PedidoStatus from './PedidoStatus';

export default class Pedido extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number;

  @column()
  public hash_id: string;

  @column()
  public cleinte_id: number;

  @column()
  public estabelecimento_id: number;

  @column()
  public meio_pagamento_id: number;

  @column()
  public pedido_endereco_id: number;

  @column()
  public valor: number;

  @column()
  public troco_para: number | null;

  @column()
  public custo_entrega: number;

  @column()
  public observacao: string | null;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime


  @hasOne(()=> Cliente,{
    foreignKey: 'id',
    localKey: 'cliente_id'
  })
  public cliente: HasOne<typeof Cliente>;

  @hasMany(()=> PedidoStatus,{
    foreignKey: 'pedido_id',
    localKey: 'id'
  })
  public pedido_status: HasMany<typeof PedidoStatus>;
}
