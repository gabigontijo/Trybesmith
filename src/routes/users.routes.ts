import { Router } from 'express';

import * as userController from '../controllers/user.controller';
import * as validation from '../middlewares/validationUser';

const router = Router();

router.post(
  '/', 
  validation.validateUserName,
  validation.validateVocation, 
  validation.validateLevel, 
  validation.validatePassword, 
  userController.create,
);
// router.get('/', userController.getAll);

export default router;