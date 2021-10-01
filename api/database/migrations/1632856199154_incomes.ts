import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Incomes extends BaseSchema {
  protected tableName = 'incomes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('income_category_id').unsigned().references('income_categories.id').onDelete('CASCADE')
      table.string('particular').notNullable()
      table.string('amount').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
