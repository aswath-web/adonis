import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import Employee from 'App/Models/Ngp.ts'
export default class JoinsController {
    public async join(){
        const Database = Employee.query()
         .join('depts', 'ngps.dept_id', '=', 'depts.id')
         
         const result = (await Database).map((obj) =>
         {
             return{
                 id: obj.$attributes.id,
                 emp_name: obj.$attributes.emp_name,
                 dept_id: obj.$attributes.dept_id,
                 dept_name: obj.$extras.dept_name
             }
         })

         return result
}
    public async joinTablesById({ params }: HttpContextContract){
    const Database = Employee.query()
     .join('depts', 'ngps.dept_id', '=', 'depts.id')
     .where('ngps.dept_id',params.id)
     const result = (await Database).map((obj) =>
     {
         return{
             id: obj.$attributes.id,
             emp_name: obj.$attributes.emp_name,
             dept_id: obj.$attributes.dept_id,
             dept_name: obj.$extras.dept_name
         }
     })
     return result
 }
 public async search({ request }: HttpContextContract) {
    const searchTerm = request.input('term');
    const employees = await Employee.query()
      .where('emp_name', 'like', `%${searchTerm}%`)
      .select('*')
      .exec();
  
    return employees;
  }
  
}
