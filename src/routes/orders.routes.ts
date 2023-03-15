import { Router } from 'express';

import * as orderController from '../controllers/oder.contoller';

const router = Router();

// router.post('/', productController.create);
router.get('/', orderController.getAll);

export default router;