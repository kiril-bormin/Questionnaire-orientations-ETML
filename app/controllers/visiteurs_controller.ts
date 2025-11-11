import TParticipants from '#models/t_participants'
import Participant from '#models/t_participants'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

export default class VisiteursController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Afficher le formulaire pour créer un visiteur
   */
  async create({view}: HttpContext) {
    return view.render('pages/home')
  }

  /**
   * Gérer la création d'un visiteur
   */
  async store({ view, request, response, session }: HttpContext) {

    // récupération du prénom saisi par le visiteur
    const prenomParticipant = request.input('prenom')

    // créer un visiteur dans la DB
    const nouveauParticipant = await TParticipants.create({ name: prenomParticipant })

    //stocker l'id de la session
    session.put('participant_id', nouveauParticipant.id)

    return response.redirect('/type-visiteurs')
  }
  async choise({response}: HttpContext){
    return response.redirect('/')
  }
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

  /**
   * Affiche les 2 type de visiteurs
   */
  async choice_type_visiteur({ view,  }: HttpContext) {
    
    return view.render('pages/type_visiteur.edge')
    
    // await Participant.updateOrCreate({})
  }
  async choice_type({ params, request, session }: HttpContext) {
    const participantId = session.get('participant_id')
    const participantType = request.input('type')

    //Bolléen pour savoir quel choix a pris le participant
    const isPortesOuvertes = participantType === 'portes-ouvertes'

    // await TParticipants.create({questionnaireType: participantType})

    if(participantId){

      const participant = await TParticipants.findOrFail(participantId)
      
      participant.questionnaireType = isPortesOuvertes 
      await participant.save()

    session.forget('participant_id')
    }
  }

}