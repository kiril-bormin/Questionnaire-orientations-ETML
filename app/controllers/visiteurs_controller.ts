import Participants from '#models/participant'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'
import QuestionVisiteur from '#models/question_visiteur'
import QuestionEtudiant from '#models/question_etudiant'

export default class VisiteursController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

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
    const nouveauParticipant = await Participants.create({ name: prenomParticipant })

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
  async choice_type_visiteur({ view }: HttpContext) {
    return view.render('pages/type_visiteur.edge')

    // await Participant.updateOrCreate({})
  }
  async choice_type({ view, response, request, session }: HttpContext) {
    const participantId = session.get('participant_id')
    const participantType = request.input('type')

    //Bolléen pour savoir quel choix a pris le participant
    const isPortesOuvertes = participantType === 'portes-ouvertes'

    if (participantId) {
      const participantId = session.get('participant_id') //récupérer l'id de l'utilisateur
      const participant = await Participants.findOrFail(participantId)

      participant.questionnaireType = isPortesOuvertes
      await participant.save()

      //Réadresser sur la bonne page
      if (isPortesOuvertes) {
        return response.redirect('/visiteur/question/1')
      } else {
        return response.redirect('/etudiant/question/1')
      }
    }
  }

  // ------------------------- Questions VISITEUR --------------------------------------
  async showQuestionVisiteur({ params, view, response }: HttpContext) {
    const questionId = params.id //récupérer le numéro de la question depuis url
    const question = await QuestionVisiteur.find(questionId) // Rechercher la question correspendante dans la bdd
    // si il n'y a plus de questions
    if (!question) {
      return response.redirect('/resultats') // aller vers la page résultat
    }
    return view.render('pages/quiz_visiteur', { question: question }) //aficher la page de base, avec des questions
  }
  async manageAnswerVisiteur({ params, request, response, session }: HttpContext) {
    const participantId = session.get('participant_id') //récupérer l'id de l'utilisateur
    const participant = await Participants.find(participantId) // trouver le participant dans la bdd utilisant son id
    const questionId = params.id //récupérer le numéro de la question depuis url
    const question = await QuestionVisiteur.find(questionId)

    const numeroQuestion = Number(params.id) //récuperer le numéro de la question

    const reponse = request.all().reponse // récupérer la réponse pour la question

    // si l'id du participant est null
    if (!participant || !question) {
      return response.redirect('/server_error')
    }
    // logique pour ajouter le poids de la réponse dans le score total
    if (reponse === 'A') {
      if (question.optionASection === 'dev') {
        participant.scoreDev = (participant.scoreDev || 0) + question.optionAPoids
      } else {
        participant.scoreInfra = (participant.scoreInfra || 0) + question.optionAPoids
      }
    } else if (reponse === 'B') {
      if (question.optionBSection === 'infra') {
        participant.scoreInfra = (participant.scoreInfra || 0) + question.optionBPoids
      } else {
        participant.scoreDev = (participant.scoreDev || 0) + question.optionBPoids
      }
    }

    participant?.save() // sauvegarder les changement dans la bdd
    const nextId = numeroQuestion + 1 // l'id pour le prochain question

    return response.redirect(`/visiteur/question/${nextId}`)
  }
  async showResultsVisiteur({ view, session, response }: HttpContext) {
    const participantId = session.get('participant_id')

    if (!participantId) {
      return view.render('pages/home')
    }

    const participant = await Participants.find(participantId) // trouver le participant dans la bdd utilisant son id

    // logique pour donner l'avis sur la filière 
    if (participant) {
      const scoreDev = participant.scoreDev || 0
      const scoreInfra = participant.scoreInfra || 0
      let profilResultat = ''
      let descriptionProfil = ''

      if (scoreDev > scoreInfra) {
        profilResultat = 'Développement d’applications (DEV)'
        descriptionProfil =
          "Votre cœur bat pour le code, la création d'applications et la résolution de problèmes complexes dans le logiciel."
      } else if (scoreInfra > scoreDev) {
        profilResultat = 'Exploitation et infrastructure (INFRA)'
        descriptionProfil =
          "Vous êtes plus intéressé par les réseaux, la sécurité, l'administration des systèmes et le maintien des serveurs."
      } else if (scoreDev > 0 || scoreInfra > 0) {
        profilResultat = 'Profil Mixte'
        descriptionProfil =
          "Vous présentez un équilibre entre le développement et l'infrastructure. Un profil polyvalent !"
      } else {
        profilResultat = 'Résultats non concluants'
        descriptionProfil = "Vos réponses n'ont pas permis de déterminer une tendance claire."
      }

      participant.resultatText = profilResultat
      await participant.save()

      session.forget('participant_id')

      return view.render('pages/resultats', {
        participant: participant,
        profil: profilResultat,
        description: descriptionProfil,
      })
    }

    return response.redirect('/')
  }
  // ------------------------- Questions ETUDIANT --------------------------------------------------------
  async showQuestionStudent({ params, view, response }: HttpContext) {
    const questionId = params.id //récupérer le numéro de la question
    const question = await QuestionEtudiant.find(questionId) // Rechercher la question correspendante
    // si il n'y a plus de questions
    if (!question) {
      return response.redirect('/resultats-etudiant') // aller vers la page résultat
    }
    return view.render('pages/quiz_etudiant', { question: question }) //aficher la page de base, avec des questions
  }
  async manageAnswerStudent({ params, request, response, session }: HttpContext) {
    const currentId = Number(params.id) 
    const question = await QuestionEtudiant.find(currentId)
    const reponseChoisie = request.input('reponse') // 1,2,3 ou 4

    const participantId = session.get('participant_id')
    if (!participantId) return response.redirect('/')
  
    const participant = await Participants.find(participantId)
    if (!participant) return response.redirect('/')
    
    if (question) {
      let points = 0
      let section: string | null = null // Du texte ('dev' ou 'infra')

      if (reponseChoisie === '1') {
        points = question.reponse1Poids || 0
        section = question.reponse1Section
      } else if (reponseChoisie === '2') {
        points = question.reponse2Poids || 0
        section = question.reponse2Section
      } else if (reponseChoisie === '3') {
        points = question.reponse3Poids || 0
        section = question.reponse3Section
      } else if (reponseChoisie === '4') {
        points = question.reponse4Poids || 0
        section = question.reponse4Section
      }

      // Logique pour ajouter les scores
      if (section === 'dev') {
        participant.scoreDev = (participant.scoreDev || 0) + points
      } else if (section === 'infra') {
        participant.scoreInfra = (participant.scoreInfra || 0) + points
      }

      await participant.save() // sauvegarder les changement dans la bdd
    }

    const nextId = currentId + 1
    return response.redirect(`/etudiant/question/${nextId}`)
  }
  async showResultsStudent({ view, session, response }: HttpContext) {
    const participantId = session.get('participant_id')
    if (!participantId) return view.render('pages/home', { error: 'Session expirée.' })

    const participant = await Participants.find(participantId)

    // logique pour donner l'avis sur la filière 
    if (participant) {
      const scoreDev = participant.scoreDev || 0
      const scoreInfra = participant.scoreInfra || 0

      let profilResultat = ''
      let descriptionProfil = ''
      let colorCode = ''

      if (scoreDev > scoreInfra) {
        profilResultat = 'Développement d’applications (DEV)'
        descriptionProfil =
          "Votre cœur bat pour le code, la création d'applications et la résolution de problèmes complexes dans le logiciel."
        colorCode = '#2563eb'
      } else if (scoreInfra > scoreDev) {
        profilResultat = 'Exploitation et infrastructure (INFRA)'
        descriptionProfil =
          "Vous êtes plus intéressé par les réseaux, la sécurité, l'administration des systèmes et le maintien des serveurs."
        colorCode = '#ea580c'
      } else if (scoreDev > 0 || scoreInfra > 0) {
        profilResultat = 'Profil Mixte'
        descriptionProfil =
          "Vous présentez un équilibre entre le développement et l'infrastructure. Un profil polyvalent !"
        colorCode = '#9333ea'
      } else {
        profilResultat = 'Résultats non concluants'
        descriptionProfil = "Vos réponses n'ont pas permis de déterminer une tendance claire."
      }

      participant.resultatText = profilResultat
      await participant.save()// sauvegarder les changement dans la bdd

      session.forget('participant_id')

      //transmettre les variable sur edge
      return view.render('pages/resultats-etudiant', {
        participant: participant,
        filiere: profilResultat,
        description: descriptionProfil,
        scoreDev: scoreDev,
        scoreInfra: scoreInfra,
        colorCode: colorCode,
      })
    }
    return response.redirect('/')
  }
}
