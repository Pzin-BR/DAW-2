import express from 'express'
const router = express.Router()

import CursoController from '../controllers/CursoController.js'
const controle = new CursoController()

const caminhobase = 'curso/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)

export default router