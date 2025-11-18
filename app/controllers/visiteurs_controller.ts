import TParticipants from '#models/t_participants'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'
import TQuestionVisiteur from '#models/t_question_visiteurs'
import TQuestionEtudiants from '#models/t_question_etudiants'

export default class VisiteursController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) { }

  /**
   * Afficher le formulaire pour créer un visiteur
   */
  async create({ view }: HttpContext) {
    return view.render('pages/home')
  }

  /**
   * Gérer la création d'un visiteur
   */
  async store({ view, request, response, session }: HttpContext) {

    // récupération du prénom saisi par le visiteur
    const prenomParticipant = request.input('prenom')

    // créer un visiteur dans la DB
    const nouveauParticipant = await TParticipants.create({ prenom: prenomParticipant })

    //stocker l'id de la session
    session.put('participant_id', nouveauParticipant.id)
    return response.redirect('/type-visiteurs')
  }
  async choise({ response }: HttpContext) {
    return response.redirect('/')
  }
  /**
   * Show individual record
   */
  async show({ params }: HttpContext) { }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) { }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }

  /**
   * Affiche les 2 type de visiteurs
   */
  async choice_type_visiteur({ view, }: HttpContext) {

    return view.render('pages/type_visiteur.edge')

    // await Participant.updateOrCreate({})
  }
  async choice_type({ view, response, request, session }: HttpContext) {
    const participantId = session.get('participant_id')
    const participantType = request.input('type')

    //Bolléen pour savoir quel choix a pris le participant
    const isPortesOuvertes = participantType === 'portes-ouvertes'

    // await TParticipants.create({questionnaireType: participantType})

    if (participantId) {
      const participantId = session.get('participant_id')
      const participant = await TParticipants.findOrFail(participantId)

      participant.questionnaireType = isPortesOuvertes
      await participant.save()

      session.forget('participant_id')

      if (isPortesOuvertes) {
        return response.redirect('/visiteur/question/1')
      }
      else {
        return response.redirect('/etudiant/question/1')
      }

    }

  }


  // ------------------------- VISITEUR ------------------

  async showQuestionVisiteur({ params, view, response }: HttpContext) {
    const questionId = params.id
    const question = await TQuestionVisiteur.find(questionId)
    if (!question) {
      return response.redirect('/resultats')
    }
    return view.render('pages/quiz_visiteur', { question: question })
  }
  async handleAnswerVisiteur({ params, request, response, session }: HttpContext) {
    const currentId = Number(params.id)
    const reponseChoisie = request.input('reponse')
    const nextId = currentId + 1
    return response.redirect(`/visiteur/question/${nextId}`)
  }

  async showResultsVisiteur({ view }: HttpContext) {

    return view.render('pages/resultats')
  }

  // ------------------------- ETUDIANT ------------------
    async showQuestionEtudiant({ params, view, response }: HttpContext) {
    const questionId = params.id
    const question = await TQuestionEtudiants.find(questionId)
    if (!question) {
      return response.redirect('/resultats')
    }
    return view.render('pages/quiz_etudiant', { question: question })
  }
  async handleAnswerEtudiant({ params, request, response, session }: HttpContext) {
    const currentId = Number(params.id)
    const reponseChoisie = request.input('reponse')
    const nextId = currentId + 1
    return response.redirect(`/etudiant/question/${nextId}`)
  }

  async showResultsEtudiant({ view }: HttpContext) {

    return view.render('pages/resultats')
  }
}



