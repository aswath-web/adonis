 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

//import { HttpContextContract } from "@adonisjs/core/build/standalone"

export default class SamplesController {
    public async index({request , response , logger}:HttpContextContract){
        
        console.log('Request' , request.url())

        logger.info('hello')
        logger.error('hey there')
        
        console.log('Request' , request.input('name','aswath'))
        return response.send({hi : 'sam'})
    }

    public async add({request , response , logger}:HttpContextContract){
        
        console.log('Request' , request.url())

        logger.info('hello')
        logger.error('hey there')
        
        console.log('Request' , request.input('name','aswath'))
        return response.send({hi : 'post method'})
    }
    

}
