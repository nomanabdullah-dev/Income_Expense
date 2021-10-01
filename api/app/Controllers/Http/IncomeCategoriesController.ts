import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IncomeCategory from 'App/Models/IncomeCategory'

export default class IncomeCategoriesController {
  public async index ({response}: HttpContextContract) {
    const incomecategories = await IncomeCategory.all()
    return response.status(200).json({
      message: ['Successfully fetched your latest category.'],
      data: incomecategories
    })
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({request, response}: HttpContextContract) {
    const category = await IncomeCategory.create({name:request.input('name')})
      return response.status(201).json({
        message: ['Successfully created category'],
        data: category
      })
  }

  public async show ({params, response}: HttpContextContract) {
    const category = await IncomeCategory.findOrFail(params.id)
      return response.status(200).json({
        message:['Successfully fetched category'],
        data: category
      })
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({request, response, params}: HttpContextContract) {
    const category = await IncomeCategory.findOrFail(params.id)
    category.name = request.input('name')
    category.save()
    return response.status(200).send(category)
  }

  public async destroy ({params, response}: HttpContextContract) {
    const category = await IncomeCategory.findOrFail(params.id)
    await category.delete()
    return response.status(200).json({ message:['Successfully deleted category'] })
  }
}
