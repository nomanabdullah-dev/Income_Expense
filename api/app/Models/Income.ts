import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import IncomeCategory from 'App/Models/IncomeCategory'

export default class Income extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public particular: string

  @column()
  public amount: string

  @column()
  public incomeCategoryId: number

  @belongsTo(() => IncomeCategory)
  public incomeCategory: BelongsTo<typeof IncomeCategory>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
