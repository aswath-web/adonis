import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Route from '@ioc:Adonis/Core/Route'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
export default class TestsController {
    public async index() {
        const ngps = await Database.from('ngps').select('*')
        return ngps
    }

    public async insert({ request, response }: HttpContextContract) {
        const newPostSchema = schema.create({
            emp_id: schema.number(),
            emp_name: schema.string(),

        })


        const payload = await request.validate({ schema: newPostSchema })

        const ins = await Database
            .insertQuery() // 👈 gives an instance of insert query builder
            .table('ngps')
            .insert({
                emp_id: payload.emp_id,
                emp_name: payload.emp_name,
            })
        try {
            await Database.table('ngps').insert({});
            console.log('Data inserted successfully.');
        } catch (error) {
            console.error('Error inserting data:', error);
        }
        return 'inserted'
    }
    ///////////////////////////////////////////////////////////////////////
    public async insertall({ request, response }: HttpContextContract) {

        const insertSchema = schema.create({
            // emp_name: schema.string(),
            employees: schema.array().anyMembers()
        })


        const payload = await request.validate({ schema: insertSchema })
        return payload.employees

        // const multi = await Database.table('ngps').multiInsert([])
        return 'multi'
    }

    public async deleteData() {
        const rowsDeleted = await Database.from('ngps')
            .where('emp_id', 1023)
            .delete()
        return rowsDeleted

    }

    public async updateData({ request, params }: HttpContextContract) {
        const newPostSchema = schema.create({
            emp_id: schema.number(),

        })
        const payload = await request.validate({ schema: newPostSchema})
        const updatedRowsCount = await Database
            .from('ngps')
            .where('emp_name', params.emp_name)
            .update({ emp_id: payload.emp_id })
        return "Success"

    }






}
