import { Router } from 'express';

import * as productController from '../controllers/product.controller';

const router = Router();

router.post('/', productController.create);
router.get('/', productController.getAll);

export default router;