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
router.get('/visiteur/question/:id', [VisiteursController, 'showQuestionVisiteur'])
router.post('/visiteur/question/:id', [VisiteursController, 'manageAnswerVisiteur'])
// fin
router.get('/resultats', [VisiteursController, 'showResultsVisiteur'])

// si étudiant
router.get('/etudiant/question/:id', [VisiteursController, 'showQuestionStudent'])
router.post('/etudiant/question/:id', [VisiteursController, 'manageAnswerStudent'])
// fin
router.get('/resultats-etudiant', [VisiteursController, 'showResultsStudent'])
