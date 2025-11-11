import Question from '#models/t_question_etudiants'
import type { HttpContext } from '@adonisjs/core/http'

export default class QuestionsController {
  /**
   * Afficher la liste des questions
   */
  async index({ view }: HttpContext) {

    // Question.all() est équivalent à "SELECT * FROM questions";
    const questions = await Question.all()

     return view.render('toto', { questions })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}