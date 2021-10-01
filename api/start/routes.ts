
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.resource('income-category', 'IncomeCategoriesController')
Route.resource('expense-category', 'ExpenseCategoriesController')

Route.resource('income', 'IncomesController')

