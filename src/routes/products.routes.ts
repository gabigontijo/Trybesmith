import { Router } from 'express';

import * as productController from '../controllers/product.controller';
import * as validation from '../middlewares/validationProduct';

const router = Router();

router.post('/', validation.validateName, validation.validateAmount, productController.create);
router.get('/', productController.getAll);

export default router;