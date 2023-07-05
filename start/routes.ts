/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
//import EmployeesController from 'App/Controllers/Http/EmployeesController'
//import TestsController from 'App/Controllers/Http/TestsController'

// import SamplesController from 'App/Controllers/Http/SamplesController'

Route.get('/', async () => {
  return { hello: 'world' }

})
Route.get('joinall/:id','JoinsController.joinTablesById')
Route.get('join','JoinsController.join')
Route.get('model','EmployeesController.store')
Route.post('ins','EmployeesController.insert')
Route.put('update/:id','EmployeesController.update')
Route.delete('delete/:id','EmployeesController.delete')
Route.get('selectid/:id','Employeescontroller.selectById')

Route.get('test','TestsController.index') // db all
Route.post('employee','TestsController.insert') // db all
Route.get('delete','TestsController.deleteData') 
Route.patch('updatedata/:emp_name','TestsController.updateData')
Route.post('insertall','TestsController.insertall') // db all
Route.post('hello','SamplesController.add')
Route.get('employee','TestsController.index')

Route.get('search','JoinsController.search')

