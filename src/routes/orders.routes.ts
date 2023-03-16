import { Router } from 'express';

import * as orderController from '../controllers/oder.contoller';
import * as validate from '../middlewares/validateOrder';

const router = Router();

router.post('/', validate.validationToken, validate.validateOrderBody, orderController.create);
router.get('/', orderController.getAll);

export default router;