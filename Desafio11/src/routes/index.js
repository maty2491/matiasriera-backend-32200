import { Router } from "express"
import {controller} from "../controllers/index.js"

const router = Router()

router.get('/', controller.inicioSesion)
router.post('/registro', controller.registro)
router.get('/perfil', controller.perfil)
router.get('/logout', controller.logout)


export default router