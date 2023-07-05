import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ngp from 'App/Models/Ngp'
import {schema} from '@ioc:Adonis/Core/Validator'

//import { Test } from '@japa/runner';

//import { HttpContext } from "@adonisjs/core/build/standalone";
//import Employee from 'App/Models/Ngp';

export default class EmployeesController {

    public async store({}:HttpContextContract){
        const details= await Ngp.all();
        return details;
    }

    public async insert({request}: HttpContextContract)
    {
        const insertSchema = schema.create({
            // emp_name: schema.string(),
           // emp_id: schema.number(),
            emp_name: schema.string(),
        })
        const payload = await request.validate({schema: insertSchema})
        const employee = await Ngp.create({
           // emp_id:payload.emp_id,
            emp_name:payload.emp_name})
        return employee;
    }

    public async update({request,params}:HttpContextContract)
    {
        const updateSchema = schema.create({
          //  emp_id: schema.number(),
            emp_name:schema.string()
        })
        const payload = await request.validate({schema: updateSchema})
        //console.log(params.emp_id)
        const employee = await Ngp.findOrFail(params.id)
       // employee.emp_id = payload.emp_id,
        employee.emp_name = payload.emp_name
        await employee.save()
        return "success"
        
    }

    public async delete({params}:HttpContextContract)
    {
        const employee = await Ngp.findBy('id',params.id)
        if(employee == null){
            return "No ID Found!!"
        }else{
        await employee.delete()
        return "Deleted Successfully"
        }
    }

    public async selectById({params}:HttpContextContract)
    {
        const employee = await Ngp.findBy('id',params.id)
        if(employee == null){
            return "No ID Found!!"
        }else{
        return employee
        }
    }

        // return Employee.all() */


    
    }

