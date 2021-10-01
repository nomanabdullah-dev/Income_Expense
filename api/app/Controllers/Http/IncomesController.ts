import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Income from 'App/Models/Income'

export default class IncomesController {
  public async index ({response}: HttpContextContract) {
    const incomes = await Income.query().preload('incomeCategory')
    return response.status(200).json({
      message: ['Successfully fetched your latest income.'],
      data: incomes
    })
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({request, response}: HttpContextContract) {
    const income = await Income.create({
      incomeCategoryId: request.input('incomeCategoryId'),
      particular: request.input('particular'),
      amount: request.input('amount'),
    })
      return response.status(201).json({
        message: ['Successfully created income'],
        data: income
      })
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
