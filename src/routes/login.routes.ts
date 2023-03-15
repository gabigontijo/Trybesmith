import { Router } from 'express';

import * as userController from '../controllers/user.controller';
import * as loginValidate from '../middlewares/validationLogin';

const router = Router();

// router.post('/', productController.create);
router.post('/', loginValidate.loginValidate, userController.login);

export default router;