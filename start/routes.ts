/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import QuestionsController from '#controllers/questions_controller'
import VisiteursController from '#controllers/visiteurs_controller'
import router from '@adonisjs/core/services/router'


router.get('/', [VisiteursController, 'create'])
router.post('/', [VisiteursController, 'store'])


// TODO : la prochaine fois, ajouter un id du visiteur à l'URL
router.get('/type-visiteurs/', [VisiteursController, 'choice_type_visiteur'])
router.post('/choix-type', [VisiteursController, 'choice_type'])

router.get('questions', [QuestionsController, 'index'])

// si visiteur
router.get('/visiteur/question/:id', '#controllers/visiteurs_controller.showQuestionVisiteur')
router.post('/visiteur/question/:id', '#controllers/visiteurs_controller.handleAnswerVisiteur')
// fin
router.get('/resultats', '#controllers/visiteurs_controller.showResultsVisiteur')


// si étudiant
router.get('/etudiant/question/:id', '#controllers/visiteurs_controller.showQuestionEtudiant')
router.post('/etudiant/question/:id', '#controllers/visiteurs_controller.handleAnswerEtudiant')
