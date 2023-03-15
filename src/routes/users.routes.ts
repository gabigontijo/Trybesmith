import { Router } from 'express';

import * as userController from '../controllers/user.controller';

const router = Router();

router.post('/', userController.create);
// router.get('/', userController.getAll);

export default router;