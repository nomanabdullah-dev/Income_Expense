import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExpenseCategory from 'App/Models/ExpenseCategory'

export default class ExpenseCategoriesController {
  public async index ({response}: HttpContextContract) {
    const expensecategories = await ExpenseCategory.all()
    return response.status(200).json({
      message: ['Successfully fetched your latest category.'],
      data: expensecategories
    })
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({request, response}: HttpContextContract) {
    const category = await ExpenseCategory.create({name:request.input('name')})
      return response.status(201).json({
        message: ['Successfully created category'],
        data: category
      })
  }

  public async show ({params, response}: HttpContextContract) {
    const category = await ExpenseCategory.findOrFail(params.id)
      return response.status(200).json({
        message:['Successfully fetched category'],
        data: category
      })
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({request, response, params}: HttpContextContract) {
    const category = await ExpenseCategory.findOrFail(params.id)
    category.name = request.input('name')
    category.save()
    return response.status(200).send(category)
  }

  public async destroy ({params, response}: HttpContextContract) {
    const category = await ExpenseCategory.findOrFail(params.id)
    await category.delete()
    return response.status(200).json({ message:['Successfully deleted category'] })
  }
}
