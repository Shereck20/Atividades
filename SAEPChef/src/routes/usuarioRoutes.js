import Router from 'express';
import {usuarioController} from '../controller/usuarioController.js';

const router = Router();
router.get('/usuario/login', usuarioController.getByLogin);

export default router;