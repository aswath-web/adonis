import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'ngps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      
      table.integer('emp_id')
      table.string('emp_name')
      table.string('job_name')
      table.integer('manager_id')
      table.date('hire_date')
      table.integer('salary')
      table.integer('commission')
      table.integer('dept_id')


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
