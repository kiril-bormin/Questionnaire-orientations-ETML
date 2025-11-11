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

router.get('questions', [QuestionsController, 'index'])
